$(document).ready(function () {

    var postData = {
        userName: "test",
        id: "123",
        role: "admin"
    }

    console.log('testja', postData);

    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/SpringBootTEST/token',
        data: JSON.stringify(postData),
        contentType: 'application/json',
    }).then(function (data, status, jqxhr) {
        $('.greeting-id').append(data);
    });



	$.ajax({
        type: 'POST',
        url: 'http://localhost:8080/SpringBootTEST/token2',
        data: JSON.stringify(postData),
        contentType: 'application/json',
    }).then(function (data, status, jqxhr) {
        $('.greeting-content').append(data);
    });
});