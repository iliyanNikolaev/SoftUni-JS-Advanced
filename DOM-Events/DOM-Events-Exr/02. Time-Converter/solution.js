function attachEventsListeners() {

    let daysBtnElement = document.getElementById('daysBtn');
    let hoursBtnElement = document.getElementById('hoursBtn');
    let minutesBtnElement = document.getElementById('minutesBtn');
    let secondsBtnElement = document.getElementById('secondsBtn');

    let textAreaDaysElement = document.getElementById('days');
    let textAreaHoursElement = document.getElementById('hours');
    let textAreaMinutesElement = document.getElementById('minutes');
    let textAreaSecondsElement = document.getElementById('seconds');

    daysBtnElement.addEventListener('click', () => {
        let userValue = Number(textAreaDaysElement.value);
        textAreaHoursElement.value = userValue * 24;
        textAreaMinutesElement.value = userValue * 1440;
        textAreaSecondsElement.value = userValue * 86400;
    });

    hoursBtnElement.addEventListener('click', () => {
        let userValue = Number(textAreaHoursElement.value);
        
        let days = userValue / 24;

        textAreaDaysElement.value = days;
        textAreaMinutesElement.value = days * 1440;
        textAreaSecondsElement.value = days * 86400;
    });

    minutesBtnElement.addEventListener('click', () => {
        let userValue = Number(textAreaMinutesElement.value);
        
        let days = userValue / 1440;

        textAreaDaysElement.value = days;
        textAreaHoursElement.value = days * 24;
        textAreaSecondsElement.value = days * 86400;
    });

    secondsBtnElement.addEventListener('click', () => {
        let userValue = Number(textAreaSecondsElement.value);
        
        let days = userValue / 86400;

        textAreaDaysElement.value = days;
        textAreaHoursElement.value = days * 24;
        textAreaMinutesElement.value = days * 1440
    });
}
