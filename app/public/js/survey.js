
$('#submit').on('click', function(){
    alert('submit works');

    const employeeSurvey = {
        name: $('#name').val(),
        photo: $('#photo').val(),
        scores: [
            $('#q1').val(), 
            $('#q2').val(), 
            $('#q3').val(), 
            $('#q4').val(), 
            $('#q5').val(),
            $('#q6').val(),
            $('#q7').val(),
            $('#q8').val(),
            $('#q9').val(),
            $('#q10').val()
        ]
    }
    $.post('/api/employees', employeeSurvey, function(response){
        console.log(response, "This should be the best match");
        $('#match-name').text(response.name)
    });
});

// const showModal = function(data){
//     $('#match-name').append(data.name);
//     $('#match-photo').attr('src', data.photo);
//     $('#match-modal').modal('show)
// }


