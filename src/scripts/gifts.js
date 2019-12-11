$(document).ready(function () {

    $('input[type=radio][name=gifts]').change(function () {
        var labelId = $(this).attr('id');
        var text = '';

        switch (labelId) {
            case 'gift-comfort':
                text = 'Протягом усього заходу «Int20h» команди матимуть можливість виконати надані їм завдання у зручному робочому місці, де вони зможуть працювати найбільш ефективно.';
                break;
            case 'gift-network':
                text = 'Учасники матимуть змогу спілкуватись та ділитись досвідом як один із одним, так і з менторами та представниками компаній під час заходу';
                break;
            case 'gift-doping':
                text = 'Учасники хакатону INT20H отримують харчову підзарядку, яка є вкрай необхідною для продукування ідей та їхнього якісного втілення протягом обмеженої кількості часу!';
                break;
            case 'gift-freedom':
                text = 'Під час заходу учасники можуть самостійно розпоряджатися відведеним часом: відпочивати, покидати воркплейс, але всі матеріали мають бути залишені на місці проведення заходу!';
                break;
            case 'gift-welcome':
                text = 'Учасникам хакатону INT20H буде виданний welcome pack, в якому вони зможуть знайти шкарпетки з оригінальним лого заходу та все необхідне для їх продуктивної роботи: блокноти, ручки, бейджі тощо.';
                break;
        }

        var descriptionBlock = $('div.gifts__body-left').children().first();
        descriptionBlock.fadeIn(400);

        var card = $(this).parent();
        card.attr('style', ' box-shadow: 0 0;')
        setTimeout(function () {
            card.attr('style', '10px 10px #10a9df');
            descriptionBlock.text(text);
        },500);
    });


});