moment.locale('en', {
        week: { dow: 1 } // Monday is the first day of the week
    });

$('#datetimepicker12').datetimepicker({
  inline: true,
  sideBySide: true,
  format: 'DD-MM-YY',
  stepping: 30,
  minDate: '01-01-14',
  
});