<?

define('SECRET_KEY', '<SECRET_KEY>');


if ($_POST) {
    echo '---<br>';
    echo $_POST['submit-btn'];
    echo '<br>---<br>';


    function getCaptcha($Token) {
        return file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".SECRET_KEY."&response={$Token}");
    }

    $Response = ($_POST['submit-btn'] == 'Success') ? getCaptcha($_POST['captcha']) : getCaptcha('');
    echo $Response;

}