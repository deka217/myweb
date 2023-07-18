// function putGreeting() {
//     var field, name, p, form;
//     field = $('#who');
//     name = field.val();
//     p = $('#hi');
//     p.text('Hello ' + name + '!');
//     form = $('#hi');
//     form.text('Hello ' + name + '!!');
// }

// function configureSubmit() {
//     var b;
//     b = $('#done');
//     b.click(putGreeting);
//     var x = document.getElementById("myForm").b;
// }

// $(document).ready(configureSubmit); 

function testResults (form) {
    var TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
    text('Hello ' + TestVar + '!');
}
