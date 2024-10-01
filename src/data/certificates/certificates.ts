import certificatesCategory from 'enums/certificatesCategory';
import RouteId from 'enums/RouteId';

interface ICertificates {
    title: string,
    category: certificatesCategory,
    url: RouteId,
    date: string,
    img: string,
}

const certificates: ICertificates[] = [
    {
        title: 'Свидетельство о признании РКО',
        category: certificatesCategory.companyCertificates,
        url: RouteId.CERTIFICATES_RKO,
        date: '2024-07-01',
        img: '/images/certificates/icon.png',
    },
];

export default certificates;
