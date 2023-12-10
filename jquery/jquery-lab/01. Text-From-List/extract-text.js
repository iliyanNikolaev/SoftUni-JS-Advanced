function extractText() {
   const result = [];
   
   $('li').each(function(){
      result.push($(this).text());
   });

   $('#result').text(result.join(', '));
}
