import math
from flask import Flask, jsonify
import sqlite3

prime_numbers = []  # array of the actual prime numbers
is_prime_numbers = []  # boolean array up to index largest_n
largest_n = 0


def sieve_of_eratosthenes(n):
    global prime_numbers, largest_n, is_prime_numbers
    if n <= largest_n:
        return
    primes = is_prime_numbers + [True] * (n - largest_n + 1)
    if largest_n == 0:
        primes[0] = primes[1] = False

    for prime in prime_numbers:
        start = prime * math.ceil(largest_n / prime)
        if (start > n):
            continue
        for i in range(start, n + 1, prime):
            primes[i] = False
    start = largest_n + 1
    for i in range(start, int(n ** 0.5) + 1):
        if primes[i]:
            for j in range(i * i, n + 1, i):
                primes[j] = False
    is_prime_numbers = primes
    prime_numbers.extend([i for i in range(start, n + 1) if primes[i]])
    largest_n = n


def self_cartesian_product():
    N = len(prime_numbers)
    for i in range(N):
        for j in range(i, N):
            prod = prime_numbers[i] * prime_numbers[j]
            salvar(prod, prime_numbers[i])


def populate(n):
    sieve_of_eratosthenes(n)
    self_cartesian_product()


conn = sqlite3.connect('fatores.sqlite3', check_same_thread=False)
cursor = conn.cursor()


def initDB():
    create_table_query = '''
    CREATE TABLE IF NOT EXISTS produto (
        numero INTEGER PRIMARY KEY,
        fator INTEGER
    )
    '''
    cursor.execute(create_table_query)
    conn.commit()


def salvar(numero, fator):
    cursor.execute("""
    INSERT OR IGNORE INTO produto (numero, fator) 
    VALUES (?,?)
    """, (numero, fator))
    conn.commit()


def request(numero):
    cursor.execute("""
    SELECT fator FROM produto WHERE numero = ?
    """, (numero,))
    return cursor.fetchone()


initDB()

app = Flask(__name__)


@app.route('/')
def home():
    return 'Coloque o número na url: /{numero}'


n = 10


@app.route('/<numero>')
def numero(numero):
    if int(numero) > n*n:
        return jsonify({
            'p1': 'Grande',
            'p2': 'Demais',
            'success': False
        })
    res = request(numero)
    if res is None:
        return jsonify({
            'p1': 'Nao',
            'p2': 'Encontrado',
            'success': False
        })
    return jsonify({
        'p1': res[0],
        'p2': int(int(numero)/res[0]),
        'success': True
    })


populate(n)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    cursor.close()
