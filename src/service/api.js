export const handleCalendarEventsResponse = async (accessToken) => {

    const calendarEventsResponse = await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/me/events",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    const calendarEvents = await calendarEventsResponse.json();

    return calendarEvents;
};

