/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function($){
  Drupal.behaviors.fablab={
      attach: function(context){
          /* check if address field exists for map if no hide */
           if($(".event-use").text() == "0"){
                 $(".event-location").hide();
                 $(".event-address").hide();
          }else{
                 if(!$(".event-address").length){
                    $(".event-location").hide();
                    $(".event-address").hide();                     
                 }
                 
                 $(".event-centre").hide();
          } 
          
          cb = $('#edit-field-use-centre-und');
          cb_choice1 = $('#edit-field-centre-reference-und-none');
          cb_choice2 = $('#edit-field-centre-reference-und-6');
          cb_choice3 = $('#edit-field-centre-reference-und-7');

          geoLocation = $('#node_event_form_group_use_location');
          if(cb.is(':checked')){
            geoLocation.css('display','block');
            enableDisable(true);
          }else{
            geoLocation.css('display','none');
            enableDisable(false);
          }
          
          cb.click(function(){
            if($(this).is(':checked')){
              geoLocation.css('display','block');  
              enableDisable(true);
            }else{
              geoLocation.css('display','none');
              enableDisable(false);
            }
          });
          
          
            $("#edit-field-date-und-0-value-datepicker-popup-0").bind("keyup keydown keypress change blur", function() {
                  //if ($(this).val() != jQuery.data(this, "lastvalue")) {
                    $('#edit-field-date-und-0-value2-datepicker-popup-0').val($(this).val());
                  //}
                  
                  //jQuery.data(this, "lastvalue", $(this).val());
            });
           
           if(($("#edit-field-date-und-0-value-timeEntry-popup-1").length > 0) ||  ($('#edit-field-date-und-0-value2-timeEntry-popup-1').length > 0)){
               if($("#edit-field-date-und-0-value-timeEntry-popup-1").val() == $('#edit-field-date-und-0-value2-timeEntry-popup-1').val()){
                        var timeSlotMin = $("#edit-field-date-und-0-value-timeEntry-popup-1").val().substr(3,2);
                        var timeSlotHour = $("#edit-field-date-und-0-value-timeEntry-popup-1").val().substr(0,2);
                        timeSlotHour = parseInt(timeSlotHour) + 1;
                        if( timeSlotHour < 10){
                          timeSlotHour = "0" + timeSlotHour.toString(); 
                        }
                       
                        $('#edit-field-date-und-0-value2-timeEntry-popup-1').val(timeSlotHour + ":"+timeSlotMin);
               }
           }
                      
           $("#edit-field-date-und-0-value-timeEntry-popup-1").bind("keyup keydown keypress change blur", function() {
                    var timeSlotMin = $(this).val().substr(3,2);
                    var timeSlotHour = $(this).val().substr(0,2);
                    timeSlotHour = parseInt(timeSlotHour) + 1;
                    if( timeSlotHour < 10){
                      timeSlotHour = "0" + timeSlotHour.toString(); 
                    }
                   
                    $('#edit-field-date-und-0-value2-timeEntry-popup-1').val(timeSlotHour + ":"+timeSlotMin);
            });
         
         
         
          //Contact form
           $("#edit-field-booking-date-und-0-value-datepicker-popup-0").bind("keyup keydown keypress change blur", function() {
           	$('#edit-field-booking-date-und-0-value2-datepicker-popup-0').val($(this).val());
            });
         

           if(($("#edit-field-booking-date-und-0-value-timeEntry-popup-1").length > 0) ||  ($('#edit-field-booking-date-und-0-value2-timeEntry-popup-1').length > 0)){
               if($("#edit-field-booking-date-und-0-value-timeEntry-popup-1").val() == $('#edit-field-booking-date-und-0-value2-timeEntry-popup-1').val()){
                        var timeSlotMin = $("#edit-field-booking-date-und-0-value-timeEntry-popup-1").val().substr(3,2);
                        var timeSlotHour = $("#edit-field-booking-date-und-0-value-timeEntry-popup-1").val().substr(0,2);
                        timeSlotHour = parseInt(timeSlotHour) + 1;
                        if( timeSlotHour < 10){
                          timeSlotHour = "0" + timeSlotHour.toString(); 
                        }
                       
                        $('#edit-field-booking-date-und-0-value2-timeEntry-popup-1').val(timeSlotHour + ":"+timeSlotMin);
               }
           }

           $("#edit-field-booking-date-und-0-value-timeEntry-popup-1").bind("keyup keydown keypress change blur", function() {
                    var timeSlotMin = $(this).val().substr(3,2);
                    var timeSlotHour = $(this).val().substr(0,2);
                    timeSlotHour = parseInt(timeSlotHour) + 1;
                    if( timeSlotHour < 10){
                      timeSlotHour = "0" + timeSlotHour.toString(); 
                    }
                   
                    $('#edit-field-booking-date-und-0-value2-timeEntry-popup-1').val(timeSlotHour + ":"+timeSlotMin);
            });

          function enableDisable(choice){
            
             //If true disable
             if(choice){
             cb_choice1.attr('checked','checked');
              cb_choice1.attr("disabled", true);
              cb_choice2.attr("disabled", true);
              cb_choice3.attr("disabled", true);
             }else{
              cb_choice1.attr("disabled", false);
              cb_choice2.attr("disabled", false);
              cb_choice3.attr("disabled", false);
             }
          }
          
      }
  }
})(jQuery);

