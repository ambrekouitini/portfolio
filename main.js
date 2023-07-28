//Clone SKills
function cloneAndAppend(selector, container, count) {
    var element = document.querySelector(selector);
    for (var i = 0; i < count; i++) {
        var copy = element.cloneNode(true);
        document.querySelector(container).appendChild(copy);
    }
}
cloneAndAppend(".skills-base", ".skills", 2);
cloneAndAppend(".skills-back", ".skills-2", 2);
cloneAndAppend(".skills-other", ".skills-3", 2);

//TypeWriter Effect
function typeWriterEffect(element, speed) {
    const text = element.innerText;
    element.innerText = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}
typeWriterEffect(document.getElementById('portfolio-heading'), 250); 








