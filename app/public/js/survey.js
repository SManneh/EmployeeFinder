// onclick function
$('#submit').on('click', function(event){
    event.preventDefault()
    
// asssigning the survey response in to a variable
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
    // ajax call to post employeeSurvey variable to the api/employee route and also to display response on the modal
    $.post('/api/employees', employeeSurvey, function(response){
        $('#match-name').text(response.name);
        $('#match-photo').attr(response.photo)
    });
});



