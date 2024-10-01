import RouteId from 'enums/RouteId';
import manufacturers from 'enums/manufacturers';

const ermak360 = {
    id: '',
    url: RouteId.ITEM_ERMAK360,
    title: 'Ермак CP-360',
    productCode: '2312',
    images: '/images/catalog/ermak360/ermak360.jpg',
    price: null,
    availability: false,
    RKOCertificate: true,
    manufacturer: manufacturers.ermak,
    characteristics: [
        'Частотный диапазон: 300,025-300,500 МГц; 336,025-336,500 МГц',
        'Выходная мощность: 1 Вт / 15 Вт',
        'Рабочие температуры: -30°C ~ +60°C',
        'Режимы работы: Симплекс, двухчастотный дуплекс',
        'Шаг сетки частот: 25 кГц',
        'Чувствительность: 0,25 мкВ тип (12 дБ SINAD)',
        'Питание: 11,2-15,5 В пост.т.',
        'Потребление: 65 Вт (при мощности 15 Вт)',
        'Размер: 59х186х179 мм',
        'Вес: 1400 г',
    ],
    advantages: [
        'Передача сигналов о бедствии с указанием местоположения и типа ЧС',
        'Оснащена передатчиком с тремя уровнями мощности',
        'Встроенный дисплей с информацией о режиме передачи, выбранном диапазоне и работающем канале, координатах и др.',
        'Корпус с классом защиты IP44, устойчив к пыли и брызгам воды, может устанавливаться как внутри, так и снаружи судна',
    ],
    equipment: [
        'Скоба крепления',
        'Тангента MDRMN4025B',
        'Кабель питания',
    ],
    description: 'Речная радиостанция ЕРМАК CP-360 представляет собой надежное судовое устройство, '
        + 'которое предназначено для обеспечения речных судов качественной УКВ радиосвязью. '
        + 'Радиостанция сертифицирована Российским Речным Регистром (Сертификат № 333-06-4.18.1) и подходит для использования на судах, '
        + 'ходящих по внутренним водным путям РФ. '
        + 'Особенности ЕРМАК CP-360 Возможности и функции позволяют использовать ЕРМАК CP-360 и в качестве судовой, '
        + 'и в качестве диспетчерской радиостанции. Каналы связи и функции ЕРМАК CP-360 Радиостанция работает с 255 каналами: '
        + 'в ней запрограммированы все каналы радиосвязи в речном частотном диапазоне 300-345 МГц, '
        + 'используемые на внутренних водных путях Российской Федерации. '
        + 'Это позволит сразу же начать использовании радиостанции, поскольку дополнительного программирования каналов не требуется. '
        + 'Функция сканирования, предусмотренная в бортовой радиостанции ЕРМАК CP-360, позволяет прослушивать все запрограммированные каналы, '
        + 'а приоритетное прослушивание позволяет контролировать активность на 5 канале, '
        + 'быстрый доступ к которому обеспечивается с помощью специальной кнопки. '
        + 'Внешний вид и защищенность ЕРМАК CP-360 Радиостанция оснащена большим удобным дисплеем с регулируемой яркостью подсветки, '
        + 'на который выводятся номер канала и используемый уровень мощности передатчика (высокий 15 Вт / низкий 1 Вт). '
        + 'Возможность настройки подсветки позволяет с одинаковой эффективностью использовать радиостанцию в любых условиях освещенности. '
        + 'ЕРМАК CP-360 надежно защищена от повреждений — ее корпус выполнен на литом металлическом шасси. '
        + 'Степень защиты устройства от пыли и воды соответствует стандарту IP54. '
        + 'Комплектация ЕРМАК CP-360 Стандартный комплект поставки включает в себя радиостанцию ЕРМАК CP-360, '
        + 'антенну, скобу крепления радиостанции C 0780213 H03 и тангенту MDRMN4025B. '
        + 'Для подключения к сети питания судна дополнительно поставляется источник питания, '
        + 'подбираемый в зависимости от типа питающей сети судна: ДМ-Р, подходящий для основной сети 220В 50Гц, '
        + 'аварийной сети 24В постоянного тока, ДМ-Р2-24, подходящий для основной сети 24В, аварийной сети 24 В, ДМ-Р2-12, '
        + 'подходящий для основной сети 12В, аварийной сети 12 В. Мы рекомендуем использовать следующие антенны, '
        + 'работающий в речном частотном диапазоне и сертифицированные Российским Речным Регистром: TC-330D1-3 с усилением 3 дБ, '
        + 'TC-330D2-6 с усилением 6 дБ, АШС-1.5-11334 с усилением 2 дБи, АШС-700Р с усилением 2 дБи. '
        + 'Поскольку радиостанция ЕРМАК CP-360 разработана на основе Motorola GM360, '
        + 'к ней подходит широкий диапазон аксессуаров от компании-производителя Motorola, включающий аудиоаксессуары и комплекты для установки: '
        + 'микрофоны, внешние динамики, внешние кнопки PTT, аудиогарнитуры, комплекты настольной установки. '
        + 'Широкий выбор аксессуаров и дополнительного оборудования позволяет полностью '
        + 'адаптировать данную модель речной радиостанции под свои нужды.',
};

export default ermak360;
