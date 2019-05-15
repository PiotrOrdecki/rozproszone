Dla Linux (testowane na Ubuntu - wszystko w terminalu):

1. Załóż katalog projektu w wybranym miejscu (np. $ mkdir proj && cd proj).
2. Wykonaj: git init (wcześniej zainstalowałeś git)
3. Wykonaj git clone https://github.com/PiotrOrdecki/rozproszone.git
4. Przejdź do katalogu projektu (cd rozproszone/projekt1)
5. Wykonaj docker-compose up -d (wcześniej zainstalowałeś docker i docker-compose)

W celu umożliwienia pełnego dostępu do mysql z poziomu PhpMyAdmin:
6. Po uruchomieniu kontenerów uruchom linię komend mysql poleceniem: docker exec -it mysql mysql -uroot -p
7. Podaj hasło: KrolKarolK0ral3
8. Wpisz kolejno polecenia (tworzymy nowego użytkownika phpmyadmin z pełnym dostępem zdalnym):
	CREATE USER 'phpmyadmin'@'%' IDENTIFIED BY 'tajne_haslo';
	GRANT ALL PRIVILEGES ON *.* TO 'phpmyadmin'@'%' WITH GRANT OPTION;
	FLUSH PRIVILEGES;
9. Możesz wyjść z linii poleceń mysql (quit) kontenera mysql.
Po wykonaniu powyższego uruchom przeglądarkę i wpisz adres (dotyczy przeglądarki w systemie z dockerem, np. Ubuntu) localhost:9090
Wyświetli się strona PhpMyAdmin, wpisz user: phpmyadmin oraz hasło tajne_haslo
Powinien otworzyć się widok zarządzania bazą danych bez ograniczeń.

Krótki kurs nodejs:
10. Zainstaluj manager pakietów npm (apt-get install npm)
11. W katalogu projekt1 załóż nowy (np. nodeapp) i wejdź do niego
12. Uruchom polecenie "npm init" w celu utworzenia package.json (plik konfiguracyjny node.js)-przyjmij wartości domyślne (nic nie zmieniaj i nie wpisuj)
13. Zainstaluj framework express.js: npm install express
14. Utwórz plik index.js z treścią:
var express = require('express');
var app = express();
app.get('/', function(req, res) {
	res.send('Witaj w node..., spróbuj /inny');
	console.log('Wyświetlono stronę /');
});
app.get('/inny', function(req, res) {
	res.send('Witaj w inny');
	console.log('Wyświetlono stronę /inny');
});
app.listen(9001, function() {console.log('aplikacja nasłuchuje na porcie 9001');});
15. Wystartuj aplikację poleceniem: node index.js (nie zatrzymuj jej Ctrl+C)
16. Przy odrobinie szczęścia dostaniesz komunikat w terminalu na jakim porcie jest dostępna aplikacja
17. Uruchom przeglądarkę (np. Firefox) w Ubuntu i przejdź do strony: localhost:9001 (jeżeli zobaczysz sensowny tekst w przeglądarce to jest OK)
18. Wyświetli się również informacja w konsoli
19. Możesz spróbować adres: localhost:9001/inne
20. Powinno zadziałać jeżeli nic nie zmieniłeś/aś.


