# Gerastosthenes Slave

![image](https://github.com/germaneagle0/Gerastosthenes-Slave/assets/59073055/f44c06ab-6561-4c30-b74d-b17d6645cc25)

Para rodar, primeiro inicie o servidor
```console
python ./server.py
```
Pega o seu endereço IPv4 fazendo
```console
ipconfig
```
Agora na pasta slave_erastothenes coloca em App.js na constante url o endereço IPv4 obtido:
```js
const url = 'http://<meu_endereco_ip>:5000';
```
Enquanto neste pasta, instale os pacotes fazendo:
```console
npm install
```
Na mesma pasta, inicia o expo fazendo
```console
npx expo start
```
E seja surpreendido pela experiência.

Poderá modificar os limites do servidor no server.py (até que número irá armazenar no banco).

(TRABALHO DE LABORATÓRIO DE PROGRAMAÇÃO III)
