<?
	// *** Настройка обязательности полей, в случае если они присутствуют в вашей форме

	// Имя
	const NAMEISREQUIRED = false;
	const MSGSNAMEERROR = "⚠ Поле обязательно для заполнения";

	// Телефон
	const TELISREQUIRED = true;
	const MSGSTELERROR = "⚠ Поле обязательно для заполнения";

	// Email
	const EMAILISREQUIRED = false;
	const MSGSEMAILERROR = "⚠ Поле обязательно для заполнения";
	const MSGSEMAILINCORRECT = "⚠ Некорректный почтовый адрес";

	// Текстовое поле
	const TEXTISREQUIRED = false;
	const MSGSTEXTERROR = "⚠ Поле обязательно для заполнения";

	// Файл
	const FILEISREQUIRED = false;
	const MSGSFILEERROR = "⚠ Забыли добавить файл";

	// Соглашение
	const AGGREMENTISREQUIRED = true;
	const MSGSAGGREMENTERROR = "⚠ Примите пользовательское соглашение"; 

	// Сообщение об успешной отправке
	const MSGSSUCCESS = "Сообщение успешно отправлено";

	// *** SMTP *** //

		require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/smtp.php');
		const HOST = 'ssl://smtp.yandex.ru';
		const LOGIN = 'mail-out@ugol178.ru';
		const PASS = 'mailout';
		const PORT = '465';

	// *** /SMTP *** //

  // Почта с которой будет приходить письмо
	const SENDER = 'mail-out@ugol178.ru';
	
	// Почта на которую будет приходить письмо
	const CATCHER = 'mail@ugol78.ru';
	
	// Тема письма
	const SUBJECT = 'Заявка с сайта по ссылке с Инстаграма';
	
	// Кодировка
  const CHARSET = 'UTF-8';
