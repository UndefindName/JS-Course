console.log('Промисы');

let promise = new Promise(function (resolve, reject) {
    resolve('Done!');
});

promise.then(
    function (result) {
        console.log(result)

        console.log('');
        console.log('Пример: loadScript');

        function loadScript(src) {
            return new Promise(function (resolve, reject) {
                let script = document.createElement('script');
                script.src = src;

                script.onload = () => resolve(script);
                script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

                document.body.append(script)
            })
        }

        let promScript = loadScript('script.js')

        promScript.then(
            script => {
                console.log(script)

                console.log('')
                console.log('Задача №2');

                function delay(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                };

                delay(5).then(() => console.log('Выполнилось через 0,005 секунду'));
            },
            error => console.log(`Ошибка: ${error.message}`),
        )

    }
)