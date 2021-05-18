$(document).ready(function(){
	console.log("Console");


    //made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

$("#deals").click(function() {
    console.log("clickvision");
    $('html, body').animate({
        
        scrollTop: $("#tools").offset().top
    }, 2000);
});


$("#clickvision").click(function() {
    console.log("clickvision");
    $('html, body').animate({
        
        scrollTop: $("#vision").offset().top
    }, 2000);
});


	$("#readmore").click(function() {
	
		console.log("scroll");
		$('html, body').animate({
			scrollTop: $("#helpyou").offset().top
		}, 2000);
	});
	
		
	$("#toTop").click(function() {
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, 2000);
	});

    $("#toSignUp").click(function() {
		$('html, body').animate({
			scrollTop: $("#signup").offset().top
		}, 2000);
	});
	
	

    $.ajax({
        method: "GET",
        url: "https://agileaffiliates.com/blog/wp-json/wp/v2/pages/199",
        dataType: "JSON",
       
        success: function(data) {
            console.log(data);
            //console.log(data.title.rendered);
            $("#mainTitle").html(data.title.rendered);
            $("#helpyou").html(data.content.rendered);
            //var mainContent = data.content.rendered.replace(/(<([^>]+)>)/gi, "");
            
            
        },
        error: function(e) {
            console.log("Error",e);
        }
    });


    $.ajax({
        method: "GET",
        
        url: "https://agileaffiliates.com/blog/wp-json/wp/v2/pages/205",
        dataType: "JSON",
        success: function(res) {
            
            //console.log(data.title.rendered);
            $("#heading").html(res.title.rendered);
            $("#disclosure").html(res.content.rendered);
            //var mainContent = data.content.rendered.replace(/(<([^>]+)>)/gi, "");
            
            
        },
        error: function(e) {
            console.log("Error",e);
        }
    });

    $.ajax({
        method: "GET",
        
        url: "https://agileaffiliates.com/blog/wp-json/wp/v2/pages/207",
        dataType: "JSON",
        success: function(result) {
            $("#sidebar").html(result.content.rendered);
            //var mainContent = data.content.rendered.replace(/(<([^>]+)>)/gi, "");
            
            
        },
        error: function(e) {
            console.log("Error",e);
        }
    });

    setTimeout(function () {
        $('#errormsg').hide();        
    }, 5000);


    
            

			submit =() => {

                
                
                var fullName = $('#fullname').val();
                var emailId = $('#emailid').val();
                var niche = $('input[name="niche"]:checked').val();
                var connect = $('input[name="connect"]:checked').val();

                
                
                if(emailId=='' || emailId==null) {
                    $('#errormsg').html("<p class='text-center text-danger'>Email cannot be empty.</p>");
                    return false;
                }

               
                
                
                var aweberObj = {
                    "email": emailId,		
                    "name": fullName,
                    "status": "Active",
                    "niche": niche,
                    "connect" : connect

                };

                console.log("emailObj",aweberObj);
                
                
                
                $.ajax({
                    url: 'savedata.php',
                    method: "POST",
                    data: JSON.stringify(aweberObj),
                    success: function(res) {
                        console.log("data",res);
                        $("#fullname").val("");
                        $("#emailid").val("");
                        $('#exampleModal').hide();
                       
                    },
                    error: function(e) {
                        console.log("error",e);
                    }
                });
                
                
            }
	
			

			doneForU = () => {
				window.location.href = 'https://done4u.agileaffiliates.com/doneforyou-bridge.html';
			}


			$("#js-rotating").Morphext({
                animation: "rotateIn"
            });
	
// Special handling for in-app browsers that don't always support new windows
(function() {
    function browserSupportsNewWindows(userAgent) {
        var rules = [
            'FBIOS',
            'Twitter for iPhone',
            'WebView',
            '(iPhone|iPod|iPad)(?!.*Safari\/)',
            'Android.*(wv|\.0\.0\.0)'
        ];
        var pattern = new RegExp('(' + rules.join('|') + ')', 'ig');
        return !pattern.test(userAgent);
    }

    if (!browserSupportsNewWindows(navigator.userAgent || navigator.vendor || window.opera)) {
        document.getElementById('af-form-304413460').parentElement.removeAttribute('target');
    }
	
	if (!browserSupportsNewWindows(navigator.userAgent || navigator.vendor || window.opera)) {
        document.getElementById('af-form-1948106789').parentElement.removeAttribute('target');
    }
	
	if (!browserSupportsNewWindows(navigator.userAgent || navigator.vendor || window.opera)) {
        document.getElementById('af-form-1621885128').parentElement.removeAttribute('target');
    }
})();


    
    (function() {
        var IE = /*@cc_on!@*/false;
        if (!IE) { return; }
        if (document.compatMode && document.compatMode == 'BackCompat') {
            if (document.getElementById("af-form-304413460")) {
                document.getElementById("af-form-304413460").className = 'af-form af-quirksMode';
            }
            if (document.getElementById("af-body-304413460")) {
                document.getElementById("af-body-304413460").className = "af-body inline af-quirksMode";
            }
            if (document.getElementById("af-header-304413460")) {
                document.getElementById("af-header-304413460").className = "af-header af-quirksMode";
            }
            if (document.getElementById("af-footer-304413460")) {
                document.getElementById("af-footer-304413460").className = "af-footer af-quirksMode";
            }
        }
		
		if (document.compatMode && document.compatMode == 'BackCompat') {
            if (document.getElementById("af-form-1948106789")) {
                document.getElementById("af-form-1948106789").className = 'af-form af-quirksMode';
            }
            if (document.getElementById("af-body-1948106789")) {
                document.getElementById("af-body-1948106789").className = "af-body inline af-quirksMode";
            }
            if (document.getElementById("af-header-1948106789")) {
                document.getElementById("af-header-1948106789").className = "af-header af-quirksMode";
            }
            if (document.getElementById("af-footer-1948106789")) {
                document.getElementById("af-footer-1948106789").className = "af-footer af-quirksMode";
            }
        }
		
		if (document.compatMode && document.compatMode == 'BackCompat') {
            if (document.getElementById("af-form-1621885128")) {
                document.getElementById("af-form-1621885128").className = 'af-form af-quirksMode';
            }
            if (document.getElementById("af-body-1621885128")) {
                document.getElementById("af-body-1621885128").className = "af-body inline af-quirksMode";
            }
            if (document.getElementById("af-header-1621885128")) {
                document.getElementById("af-header-1621885128").className = "af-header af-quirksMode";
            }
            if (document.getElementById("af-footer-1621885128")) {
                document.getElementById("af-footer-1621885128").className = "af-footer af-quirksMode";
            }
        }
    })();
    
	
	
});
