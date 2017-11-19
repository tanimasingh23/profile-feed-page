$( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAAybC5Q7MT9nFkgZCtS8F6CCiipKZACsuIJu6ZBQ1xOI8bGx8plC08pN49ZA0TNytV1VN6ueFeBfZBLLepX5MYBzZBbdpLdv1tA24TYpXIOJ20Po2gno4CpVJffiUHFrbbXWehULnUkzqyUfbupZCbypVRH4T5o393cZAOBy9tLuruoe9aIdNRuWxz5my61BtwZDZD';
    $.ajax('https://graph.facebook.com/me?fields=name&access_token='+myFacebookToken,{

        success : function(response){
            $("#myName").text(response.name);    
            },
        error : function(request,errorType,errorMessage){
            console.log(request);
            console.log(errorType);
            alert(errorMessage);
            },
        timeout:5000,
        beforeSend : function(){
            $('#myName').hide();
            $('#facebookBtn').hide();
            $('#postBtn').hide();
            $("#hide").hide();
            },

        complete : function(){
            $('#myName').show();
            $('#facebookBtn').show();
            $('#postBtn').show();
            $("#hide").hide();
            }
        }
    );

});

$( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAAybC5Q7MT9nFkgZCtS8F6CCiipKZACsuIJu6ZBQ1xOI8bGx8plC08pN49ZA0TNytV1VN6ueFeBfZBLLepX5MYBzZBbdpLdv1tA24TYpXIOJ20Po2gno4CpVJffiUHFrbbXWehULnUkzqyUfbupZCbypVRH4T5o393cZAOBy9tLuruoe9aIdNRuWxz5my61BtwZDZD';

    function getFacebookInfo(){
        $("#hide").show();
        $.ajax('https://graph.facebook.com/me?fields=id,name,about,birthday,education,email,gender,hometown,location,relationship_status,family{name},work&access_token='+myFacebookToken,{

            success : function(response){
                $("#about").text(response.about);
                $("#gender").text(response.gender);
                $("#birthday").text(response.birthday);
                $("#myEmail").text(response.email);
                $("#work").text(response.work[0].employer.name);
                $("#school").text(response.education[1].school.name);
                $("#college").text(response.education[2].school.name);
                $("#myHomeTown").text(response.hometown.name);
                $("#location").text(response.location.name);
                $("#relStatus").text(response.relationship_status);
                $("#member1").text(response.family.data[0].name);
                $("#member2").text(response.family.data[1].name);    
                },
            error : function(request,errorType,errorMessage){
                console.log(request);
                console.log(errorType);
                alert(errorMessage);
                },
            timeout:1000,
            beforeSend : function(){
                $('#facebookBtn').show();
                },
            complete : function(){
                $('#facebookBtn').hide();
                }

            }//end argument list 
        );// end ajax call 

    }// end get facebook info

    function getFacebookFeeds(){
        $("#hide").show();
        $.ajax('https://graph.facebook.com/me?fields=posts.limit(10){created_time,description,message,story},name&access_token='+myFacebookToken,{

            success : function(response){

                for (var i = 0; i < response.posts.data.length; i++) { 
                    if(response.posts.data[i].created_time !== undefined || response.posts.data[i].created_time !== null || response.posts.data[i].story !== undefined || response.posts.data[i].story !== null){
                        
                        $("#story"+i).text(response.posts.data[i].story);
                        $("#time"+i).text(response.posts.data[i].created_time);
                        $("#message"+i).text(response.posts.data[i].message);
                        $("#description"+i).text(response.posts.data[i].description);
                        }
                    }//end for loop
                },
            error : function(request,errorType,errorMessage){
                console.log(request);
                console.log(errorType);
                alert(errorMessage);
                },
            timeout:1000,
            beforeSend : function(){
                $('#postBtn').show();
                },
            complete : function(){
                $('#postBtn').hide();
                }

            }//end argument list 

        );// end ajax call 
    
     }// end get facebook posts

    $("#facebookBtn").on('click',getFacebookInfo)
    $("#postBtn").on('click',getFacebookFeeds)

});