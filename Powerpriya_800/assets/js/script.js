
		$(function() {
			//$( "#accordion" ).accordion();
		  });
		var accordion1 = products.productData;
		var result = '';
		// Function to call data into Accordion
		accordionList(accordion1);
		$('#accordion').append(result);
		function accordionList(accordion1) {
			$.each(accordion1, function() {
				result +="<div> <h3 class='panel-title'>Product "+this.id+"</h3>"+
				"<div class='accordion-content' role='tabpanel' aria-labelledby='heading"+this.id+"' id='collapse"+this.id+"'><p class='productName'>Item: "+this.name+"</p>"+
				"<p class='productPrice'>Price: "+this.price+"</p></div></div>";	
			});
		}
		$('.accordion-content').hide();
		$('#accordion .panel-title').click(function(){
			$(this).parent().parent().find('.accordion-content').hide();
			$(this).parent().find('.accordion-content').slideToggle(1000);
		})
		// Function to call data into Tabs
		var result11 = '';
		var result12 = '';
		tabList(accordion1);
		$('#nav-tabs').append(result11);
		$('#tab-content').append(result12);
		function tabList(accordion1) {
			$.each(accordion1, function() {
				result11 +="<li class='tab"+this.id+"' role='presentation'><a href='#tab"+this.id+"' aria-controls='"+this.id+"' role='tab' data-toggle='tab'>Product "+this.id+"</a></li>";	
			});
			$.each(accordion1, function() {
				result12 +="<div role='tabpanel' class='tab-pane fade tab"+this.id+"-pane' id='tab"+this.id+"'><p class='productName'>Item: "+this.name+"</p>"+
				"<p class='productPrice'>Price: "+this.price+"</p> </div>";	
			});
		}
		
		$('#myTab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		})
		if ($('#nav-tabs li').hasClass('tab1')) {
			$('#nav-tabs li.tab1').addClass('active');
			console.log('5');
		}
		if ($('div').hasClass('tab1-pane')) {
			$('#tab-content .tab1-pane').addClass('in active');
		}
		// Function for Progress Bar
		Object.size = function(obj) {
		var size = 0, key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) size++;
		}
		return size;
		};		
		// Get the size of an object
		var size = Object.size(accordion1);
		var count = 0;
		var result3 = '';
		$('.progress-button').click(function() {
		++count;
		if(size >= count) {
			result3 ="<progress value='"+count+"' max='"+size+"'></progress>";
		}
		$('#progress-bar').append(result3);
		})