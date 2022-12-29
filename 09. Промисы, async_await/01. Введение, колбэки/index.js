console.log('Введение: колбэки');

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`))

    document.body.append(script);
}

loadScript('script.js', function(err, script) {
    if (err) {
        console.log(err)
    } else {
        console.log(script)
    }
})