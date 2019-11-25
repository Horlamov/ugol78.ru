jQuery(document).ready(function() {
    
	
	 $('.form-ajax, #callback_oprosnik form').append('<input type="hidden" name="city">');
     $('.form-ajax input[name="city"], #callback_oprosnik form input[name="city"]').val(geoplugin_city());
	
	 $('.form-ajax, #callback_oprosnik form').append('<input type="hidden" name="region">');
      $('.form-ajax input[name="region"], #callback_oprosnik form input[name="region"]').val(geoplugin_region());  
	
	$('.form-ajax').submit(function(){	  
	   $.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
			}).done(function(){
				$('.form-ajax').trigger( 'reset' );
				//alert('Спасибо за заявку!'); 
				
				//setTimeout(function(){ 
					//$.fancybox.close('#callback_oprosnik');
				$('.modal_block_6').css('display','none');
				$('.modal_block_7').css('display','block');
				//$('.modal_block_0, .next_prev_btns').css('display','block');
				value_0 = 'uncheck';
				value_1 = 'uncheck';
				value_2 = 'uncheck';
				value_3 = 'uncheck';
				value_4 = 'uncheck';
				value_5 = 'uncheck';
				//}, 2000);
				i = 0;
			});
			return false;  			
	});
	
	$('input[name="phone"]').mask("+7 (999) 999-99-99");
	
	
	var i=0, elem; 
	
	$('.back_btn').click(function(){
		if( i == 0){
			return false;
		}else{
			i = i-1;
			if( i == 0){
				$('.progress-bar_info span').text('0%'); 
				$('.progress-bar_wr span').css('width','0%');

				
				
			}
			if( i == 1){
				$('.progress-bar_info span').text('17%'); 
				$('.progress-bar_wr span').css('width','17%'); 
			}
			if( i == 2){
				$('.progress-bar_info span').text('33%'); 
				$('.progress-bar_wr span').css('width','33%'); 
			}
			if( i == 3){
				$('.progress-bar_info span').text('50%'); 
				$('.progress-bar_wr span').css('width','50%'); 
			}
			if( i == 4){
				$('.progress-bar_info span').text('67%'); 
				$('.progress-bar_wr span').css('width','67%'); 
			}
			if( i == 5){
				$('.progress-bar_info span').text('83%'); 
				$('.progress-bar_wr span').css('width','83%'); 
			}
		} 
		
		$('#container_modal_blocks .modal_block').each(function(elem) {
			$('.modal_block_'+elem).css('display','none');
		});   
		
		$('.modal_block_'+i).css('display','block'); 
		console.log(i);
	});
	
	
	$('.modal_block input[type="radio"]').click(function(){ 
	
		if( i == 6){
			return false; 
		}else{
			i = i+1;
			if( i == 1){
				$('.progress-bar_info span').text('17%'); 
				$('.progress-bar_wr span').css('width','17%'); 
			}
			if( i == 2){
				$('.progress-bar_info span').text('33%'); 
				$('.progress-bar_wr span').css('width','33%'); 
			}
			if( i == 3){
				$('.progress-bar_info span').text('50%'); 
				$('.progress-bar_wr span').css('width','50%'); 
			}
			if( i == 4){
				$('.progress-bar_info span').text('67%'); 
				$('.progress-bar_wr span').css('width','67%'); 
			}
			if( i == 5){
				$('.progress-bar_info span').text('83%'); 
				$('.progress-bar_wr span').css('width','83%'); 
			}
			if( i == 6){
				$('.next_prev_btns, .progress_bar_line').css('display','none'); 
			}
		} 
		$('#container_modal_blocks .modal_block').each(function(elem) {
			$('.modal_block_'+elem).css('display','none');
		});
		$('.modal_block_'+i).css('display','block');
		console.log(i); 
	});
	
	var value_0 = 'uncheck';
	$('input[name=proect_doma]').change(function(){ // перехватываем событие изменения значения
		value_0 = $( 'input[name=proect_doma]:checked' ).val(); // получаем значение атрибута checked (если такой есть)
		if( value_0 ){
				value_0 = 'check';
		}else{
			value_0 = 'uncheck';
		}
	});
	
	var value_1 = 'uncheck';
	$('input[name=kol_et]').change(function(){ // перехватываем событие изменения значения
		value_1 = $( 'input[name=kol_et]:checked' ).val(); // получаем значение атрибута checked (если такой есть)
		if( value_1 ){
				value_1 = 'check';
		}else{
			value_1 = 'uncheck';
		}
	});
	
	var value_2 = 'uncheck';
	$('input[name=ploshad_doma]').change(function(){ // перехватываем событие изменения значения
		value_2 = $( 'input[name=ploshad_doma]:checked' ).val(); // получаем значение атрибута checked (если такой есть)
		if( value_2 ){
				value_2 = 'check';
		}else{
			value_2 = 'uncheck';
		}
	});
	
	var value_3 = 'uncheck';
	$('input[name=tip_perekrytiy]').change(function(){ // перехватываем событие изменения значения
		value_3 = $( 'input[name=tip_perekrytiy]:checked' ).val(); // получаем значение атрибута checked (если такой есть)
		if( value_3 ){
				value_3 = 'check';
		}else{
			value_3 = 'uncheck';
		}
	});
	
	var value_4 = 'uncheck';
	$('input[name=pristroenniy_garaj]').change(function(){ // перехватываем событие изменения значения
		value_4 = $( 'input[name=pristroenniy_garaj]:checked' ).val(); // получаем значение атрибута checked (если такой есть)
		if( value_4 ){
				value_4 = 'check';
		}else{
			value_4 = 'uncheck';
		}
	});
	
	var value_5 = 'uncheck';
	$('input[name=uslugi_stroitelstva]').change(function(){ // перехватываем событие изменения значения
		value_5 = $( 'input[name=uslugi_stroitelstva]:checked' ).val(); // получаем значение атрибута checked (если такой есть)
		if( value_5 ){
				value_5 = 'check';
		}else{
			value_5 = 'uncheck';
		}
	});
	
	
	$('.next_btn').click(function(){ 
		if( value_0 == 'uncheck' && i == 0 ){
			return false;
		}
		if( value_1 == 'uncheck' && i == 1 ){
			return false;
		}
		if( value_2 == 'uncheck' && i == 2 ){
			return false;
		}
		if( value_3 == 'uncheck' && i == 3 ){
			return false;
		}
		if( value_4 == 'uncheck' && i == 4 ){
			return false;
		}
		if( value_5 == 'uncheck' && i == 5 ){
			return false;
		}
	
		if( i == 6){
			return false; 
		}else{
			i = i+1;
			if( i == 1){
				$('.progress-bar_info span').text('17%'); 
				$('.progress-bar_wr span').css('width','17%'); 
			}
			if( i == 2){
				$('.progress-bar_info span').text('33%'); 
				$('.progress-bar_wr span').css('width','33%'); 
			}
			if( i == 3){
				$('.progress-bar_info span').text('50%'); 
				$('.progress-bar_wr span').css('width','50%'); 
			}
			if( i == 4){
				$('.progress-bar_info span').text('67%'); 
				$('.progress-bar_wr span').css('width','67%'); 
			}
			if( i == 5){
				$('.progress-bar_info span').text('83%'); 
				$('.progress-bar_wr span').css('width','83%'); 
			}
			if( i == 6){
				$('.next_prev_btns, .progress_bar_line').css('display','none'); 
			}
		} 
		$('#container_modal_blocks .modal_block').each(function(elem) {
			$('.modal_block_'+elem).css('display','none');
		});
		$('.modal_block_'+i).css('display','block');
		console.log(i); 
	});
	
	console.log(i);
	
	
	$(".fancybox").fancybox({
		'padding':0,
		'maxWidth': '90%'
	});
	

	
});  

 