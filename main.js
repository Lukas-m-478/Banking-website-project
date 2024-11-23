//function makes sure page fully loads before anything happens
$(document).ready(function() {
    // Homepage code
    // Changes colour of link when you hover over it
    $(".links a").hover(function() {
            $(this).css("color", "yellow");
        },
        //goes back to original colour when mouse hovers off 
        function() {
            $(this).css("color", "white");
        }
    );

    $(".logo a").hover(function() {
            $(this).css("color", "yellow");
        },
        function() {
            $(this).css("color", "white");
        }
    );
    
    $(".mortgage_box a").hover(function() {
            $(this).css("color","yellow"); 
        },
        function() {
            $(this).css("color","#181209");
        }
    );

    // Mortgage calculator page code
    // Calculates monthly payments
    $("#calculate_button").click(function() {
        //gets inputs
        const loan_amount = parseFloat($("#loan_amount").val());
        const loan_term = parseFloat($("#loan_term").val());
        const monthly_income = parseFloat($("#monthly_income").val());
        const annual_interest_rate = 0.045

        //clears boxes after button is pressed
        $("#loan_amount").val('');
        $("#loan_term").val('');
        $("#monthly_income").val('');

        //sets text values in mortgage breakdown back to default, just in case no values are found
        $("#monthly_payment").text(`N/A`);
        $("#total_payment").text(`N/A`);
        $("#total_interest").text(`N/A`);
        $("#remaining_income").text(`N/A`);

        //checks for invalid inputs
        if (isNaN(loan_amount) || isNaN(monthly_income) || isNaN(loan_term)) {
            alert("Invalid, values must be numeric")
            return;
        }

        if (loan_amount <= 0 || monthly_income <= 0 || loan_term <= 0) {
            alert("Invalid, values cannot be negative")
            return;
        }
        //calculates the needed values
        const monthly_interest_rate = annual_interest_rate / 12
        const n = loan_term * 12
        //main calculation
        var monthly_payment = (loan_amount*monthly_interest_rate*((1+monthly_interest_rate)**n))/(((1+monthly_interest_rate)**n)-1)
        // Gets rid of decimals
        monthly_payment = monthly_payment | 0
        
        //does eligibility check and displays output as an alert
        if (monthly_payment > (0.3*monthly_income)) {
            alert(`Your monthly payment is £${monthly_payment} but it is unaffordable`)
        } else{
            alert(`Your monthly payment is £${monthly_payment} and it is affordable`)
        }
       
        // calculates needed values
        const total_payment = monthly_payment * n
        const total_interest = total_payment - loan_amount
        let remaining_income = "N/A";

        if (!isNaN(monthly_income) && monthly_income > 0) {
            remaining_income = monthly_income - monthly_payment;
        }
        //displays outputs as texts to user
        $("#monthly_payment").text(`£${monthly_payment}`);
        $("#total_payment").text(`£${total_payment}`);
        $("#total_interest").text(`£${total_interest}`);
        $("#remaining_income").text(`£${remaining_income}`);
    });

    //FAQ page code

    //Q1
    //code is re-used here here so it will be explained once
    $(".q1_header").click(function() {
        //gets width of question 1 div
        var width = $(".question_1").width();
        //checks if the width of div is at original state
        //if width is original state, then animation is
        //performed so the width and height of the whole
        //div increases and opacity is changed to 1 to
        //make the text visible because in the css file
        //the opacity of the text is set to 0
        if (width === 200 ) {
            $(".question_1").animate({
                width: '350px',
                height: '200px'
            }, 1000)
            //.show makes the div element which contains background colour
            // and text visible and so it can be rendered
            $(".q1_text").show().animate({
                //second argument makes text appear in 1 second, 
                //1000 milliseconds
                opacity: '1'
            },1000);  
            //if width is not at original state, 
            //animation is performed so width and 
            //height is set back to original and 
            //opacity is set back to 0
        } else {
            $(".question_1").animate({
                width: '200px',
                height: '100px'
            }, 1000)
            $(".q1_text").show().animate({
                opacity: '0',
            },1000);
        }

      
    });
    //Q2
    $(".q2_header").click(function() {
    var width = $(".question_2").width();
    
    if (width === 200 ) {
        $(".question_2").animate({
            width: '350px',
            height: '200px'
        }, 1000)
        $(".q2_text").show().animate({
            opacity: '1'
        },1000);  
    } else {
        $(".question_2").animate({
            width: '200px',
            height: '100px'
        }, 1000)
        $(".q2_text").show().animate({
            opacity: '0',
        },1000);
    }
      
    });

    //q3
    $(".q3_header").click(function() {
        var width = $(".question_3").width();
        
        if (width === 200 ) {
            $(".question_3").animate({
                width: '350px',
                height: '200px'
            }, 1000)
            $(".q3_text").show().animate({
                opacity: '1'
            },1000);  
        } else {
            $(".question_3").animate({
                width: '200px',
                height: '100px'
            }, 1000)
            $(".q3_text").show().animate({
                opacity: '0',
            },1000);
        }
          
        });

    //q4
    $(".q4_header").click(function() {
        var width = $(".question_4").width();
        
        if (width === 200 ) {
            $(".question_4").animate({
                width: '350px',
                height: '200px'
            }, 1000)
            $(".q4_text").show().animate({
                opacity: '1'
            },1000);  
        } else {
            $(".question_4").animate({
                width: '200px',
                height: '100px'
            }, 1000)
            $(".q4_text").show().animate({
                opacity: '0',
            },1000);
        }
          
        });

     //q5
     $(".q5_header").click(function() {
        var width = $(".question_5").width();
        
        if (width === 200 ) {
            $(".question_5").animate({
                width: '350px',
                height: '200px'
            }, 1000)
            $(".q5_text").show().animate({
                opacity: '1'
            },1000);  
        } else {
            $(".question_5").animate({
                width: '200px',
                height: '100px'
            }, 1000)
            $(".q5_text").show().animate({
                opacity: '0',
            },1000);
        }
          
        });

     //q6
     $(".q6_header").click(function() {
        var width = $(".question_6").width();
        
        if (width === 200 ) {
            $(".question_6").animate({
                width: '350px',
                height: '200px'
            }, 1000)
            $(".q6_text").show().animate({
                opacity: '1'
            },1000);  
        } else {
            $(".question_6").animate({
                width: '200px',
                height: '100px'
            }, 1000)
            $(".q6_text").show().animate({
                opacity: '0',
            },1000);
        }
          
        });
    //Services page code
    $(".service_1_header").click(function() {
        //when service 1 header on banner is clicked
        //the opacity of the service text is found
        var current_opacity = $(".service_1_text").css("opacity");
        console.log(current_opacity)
        //then it is checked if opacity is 0
        //if it is 0 then it is changed to 1
        //to make text visible
        if (current_opacity === "0") {
            $(".service_1_text").show().animate({
                opacity: '1'
            },1000);
        //if it is 1 then the opacity is
        //changed back to 0 to hide text
        } else {
            $(".service_1_text").show().animate({
                opacity: '0'
            },1000);  
        }
    })
    
    $(".service_2_header").click(function() {
        var current_opacity = $(".service_2_text").css("opacity");
        console.log(current_opacity)

        if (current_opacity === "0") {
            $(".service_2_text").show().animate({
                opacity: '1'
            },1000);  
        } else {
            $(".service_2_text").show().animate({
                opacity: '0'
            },1000);  
        }
    })

    $(".service_3_header").click(function() {
        var current_opacity = $(".service_3_text").css("opacity");
        console.log(current_opacity)

        if (current_opacity === "0") {
            $(".service_3_text").show().animate({
                opacity: '1'
            },1000);  
        } else {
            $(".service_3_text").show().animate({
                opacity: '0'
            },1000);  
        }
    })

    $(".service_4_header").click(function() {
        var current_opacity = $(".service_4_text").css("opacity");
        console.log(current_opacity)

        if (current_opacity === "0") {
            $(".service_4_text").show().animate({
                opacity: '1'
            },1000);  
        } else {
            $(".service_4_text").show().animate({
                opacity: '0'
            },1000);  
        }
    })

    $(".service_5_header").click(function() {
        var current_opacity = $(".service_5_text").css("opacity");
        console.log(current_opacity)

        if (current_opacity === "0") {
            $(".service_5_text").show().animate({
                opacity: '1'
            },1000);  
        } else {
            $(".service_5_text").show().animate({
                opacity: '0'
            },1000);  
        }
    })

    //makes the header
    // change to yellow when
    //user hovers mouse over it
    $(".service_1_header").hover(function() {
        $(this).css("color", "yellow");
    },
    //changes header back to black
    //when user hovers off header
        function() {
            $(this).css("color", "black");
        }
    );
    
    $(".service_2_header").hover(function() {
        $(this).css("color", "yellow");
    },
        function() {
            $(this).css("color", "black");
        }
    );

    $(".service_3_header").hover(function() {
        $(this).css("color", "yellow");
    },
        function() {
            $(this).css("color", "black");
        }
    );

    $(".service_4_header").hover(function() {
        $(this).css("color", "yellow");
    },
        function() {
            $(this).css("color", "black");
        }
    );

    $(".service_5_header").hover(function() {
        $(this).css("color", "yellow");
    },
        function() {
            $(this).css("color", "black");
        }
    );
    
});
