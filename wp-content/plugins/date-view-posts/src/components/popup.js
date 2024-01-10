export default function openPopup($) {

    function closePopup(event) {
        const $popup = $('.dvp-popup');
        const $articles = $('.dvp-articles');

        if (
            !$articles.is(event.target) &&
            $articles.has(event.target).length === 0 &&
            !$popup.is(event.target) &&
            $popup.has(event.target).length === 0 &&
            !$(event.target).hasClass('dvp-open-article-popup-js')
        ) {
            $popup.hide();
        }
    }

    $(document).on('click', function (event) {
        closePopup(event);
    });

    $('.dvp-open-article-popup-js').each(function () {
        $(this).on('click', function (event) {
            event.preventDefault();
            const $trigger = $(this);
            const imageUrl = $trigger.find('img').attr('src');
            const title = $trigger.find('.dvp-title').text();
            const date = $trigger.find('.dvp-date').text();
            const articleUrl = $trigger.find('.dvp-title').attr('href');
            const content = $trigger.find('.dvp-content').text();


            $('.dvp-popup').html(`
            <span class="dvp-close-popup-js">✖</span>
            <img src="${imageUrl}" alt="${title}">
            <div>
                <date class="dvp-date">${date}</date>
                <a href="${articleUrl}" class="dvp-title">${title}</a>
                <p class="dvp-content">${content}</p>
                <a href="${articleUrl}">Read more</a>
            </div>
        `);

            $('.dvp-popup').show();

            $('.dvp-close-popup-js').on('click', function () {
                $('.dvp-popup').hide();
            });
        });

    });
}