function search() {
   const searchedValue = $('#searchText').val();
   const isEmpty = searchedValue == '';

   let matches = 0;
   $('li').each(function(){
      $(this).css('font-weight', 'normal');
      const isMatch = $(this).text().toLowerCase().includes(searchedValue.toLowerCase());
      
      if(!isEmpty && isMatch) {
         matches++;
         $(this).css('font-weight', 'bold');
      }
   });

   $('#result').text(`${matches} matches found.`)
}