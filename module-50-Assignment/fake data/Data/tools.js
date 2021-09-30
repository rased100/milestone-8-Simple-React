const police = [
    {
        sl: 1,
        Name: 'Md. Masudur Rahman Bhuiyan',
        Rank: 'Police Commisioner',
        BP: 7095051990,
        Mobile: 02477721162,
        Email: 'pckmp@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/9f99da0d7e671d9ca655b01078648fe9.jpg'
    },
    {
        sl: 2,
        Name: 'S.M. Fazlur Rahman',
        Rank: 'Additional Police Commissioner (Crime)',
        BP: 6898020819,
        Mobile: 02477727125,
        Email: 'addlpckmp.crime@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/a038f1387a6fb16267776514fd20c30e.jpg'
    },
    {
        sl: 3,
        Name: 'Sarder Rakibul Islam, bpm-seba',
        Rank: 'Additional Police Commissioner (A & O)',
        BP: 7299109033,
        Mobile: 02477721581,
        Email: 'addlpckmp.admin@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/d7e3081a184a77e6451f8b8b767df306.jpgs'
    },
    {
        sl: 4,
        Name: 'Mollah Jahangir Hossain',
        Rank: 'Deputy Police Commissioner(North)',
        BP: 6801115703,
        Mobile: 01320058490,
        Email: 'dc.north.kmp@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/86d7ee15e22b0dc29afb97f40b1fe88c.jpg'
    },
    {
        sl: 5,
        Name: 'Mohammad Anwar Hossain',
        Rank: 'Deputy Police Commissioner(South)',
        BP: 7703020814,
        Mobile: 01320058360,
        Email: 'kmp.dc.south@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/cd287de304481f322ea1734fc289c6d6.jpg'
    },
    {
        sl: 6,
        Name: 'Rashida Begum',
        Rank: 'Deputy Police Commissioner (City Special Branch)',
        BP: 7503027812,
        Mobile: 01320058620,
        Email: 'kmp.sscsb@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/d5356ca38909c5ffc292570f5c24f16e.jpg'
    },
    {
        sl: 7,
        Name: 'Reazuddin Ahmmed, PPM',
        Rank: 'Deputy Police Commissioner (Prosecution)',
        BP: 7805110127,
        Mobile: 01320058011,
        Email: 'kmp.dc.prosecution@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/95da6b1b377af5088c29d61c49d86c1f.jpg'
    },
    {
        sl: 8,
        Name: 'Mohammad Ahsan Shah',
        Rank: 'Deputy Police Commissioner (Headquarters)',
        BP: 7405100998,
        Mobile: 01320058010,
        Email: 'dchqkmp@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/90540b7155db01b9e447f1e3d21dfeb2.png'
    },
    {
        sl: 9,
        Name: 'B,M, Nuruzzaman, BPM',
        Rank: 'Deputy Police Commissioner (DB)',
        BP: 7705110744,
        Mobile: 01320059100,
        Email: 'dcdbkmp@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/8757498f35e800aee89e1fc52df86f4b.jpg'
    },
    {
        sl: 10,
        Name: 'Sk. Moniruzzaman Mithu',
        Rank: 'Deputy Police Commissioner (Finance & Budget)',
        BP: 7806113983,
        Mobile: 01320058012,
        Email: 'kmp.dc.finance@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/694039c62e4a414b4c6855b50f9bd413.jpg'
    },
    {
        sl: 11,
        Name: 'Md. Kamrul Islam',
        Rank: 'Deputy Police Commissioner (Estate & Development)',
        BP: 7706109823,
        Mobile: 01320058013,
        Email: 'kmp.dc.estate@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/0d040b25721124ade6b49353866e5617.jpg'
    },
    {
        sl: 12,
        Name: 'Monira Sultana',
        Rank: 'Deputy Police Commissioner (RCD)',
        BP: 8106117858,
        Mobile: 01320058320,
        Email: 'kmp.dc.rcd@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/61d22cb41ff953936a01725d6cf4a372.jpg'
    },
    {
        sl: 13,
        Name: 'Mohammad Tazul Islam',
        Rank: 'Deputy Police Commissioner (Traffic)',
        BP: 7606118900,
        Mobile: 01320058660,
        Email: 'kmp.dc.traffic@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/6876f466e7dee0f5aa8524e43ad748c4.jpg'
    },
    {
        sl: 14,
        Name: 'Sonali Sen',
        Rank: 'Additional Deputy Police Commissioner (South)',
        BP: 8212148911,
        Mobile: 01320058361,
        Email: 'kmp.adc.south@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/cb01ba893fa5629c1303cbf770edc02a.jpg'
    },
    {
        sl: 15,
        Name: 'Shaikh Imran',
        Rank: 'Additional Deputy Police Commissioner (DB)',
        BP: 8613159343,
        Mobile: 01320059101,
        Email: 'kmp.adc.hq@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/b0eb8ced2c5413da6c9984eb6302fc8d.jpg'
    },
    {
        sl: 16,
        Name: 'S.M Kamruzzaman, PPM',
        Rank: 'Assistant Commissioner of Police (Prosecution)',
        BP: 6891094660,
        Mobile: 01320058067,
        Email: 'kmp.ac.prosecution@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/a63901c3d0d722002f75b40c3e25fa61.jpg'
    },
    {
        sl: 17,
        Name: ' Md Azam Khan',
        Rank: 'Assistant Commissioner of Police (RO)',
        BP: 6891094660,
        Mobile: 01320058068,
        Email: 'kmp.ac.ro@police.gov.bd',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/dda6c8413249d039773969815a881c7a.jpg'
    },
    {
        sl: 18,
        Name: 'Md Nazrul Islam',
        Rank: 'Assistant Commissioner of Police (Supply & Estate)',
        BP: 6386120351,
        Mobile: 01320058070,
        Email: 'nazrulislammolla5959@gmail.com',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/ab2ea5df35906e4738ecbfb192f17555.jpg'
    },
    {
        sl: 19,
        Name: 'Amit Kumar Barman',
        Rank: 'Assistant Commissioner of Police (Khulna)',
        BP: 90107195258,
        Mobile: 01320058372,
        Email: 'amit09bdjes@outlook.com',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/2796f2c69a8b839c870e6d9100953658.jpg'
    },
    {
        sl: 20,
        Name: 'S.M. Bayzid Ibne Akbar',
        Rank: 'Assistant Commissioner of Police (Daulatpur)',
        BP: 9217195255,
        Mobile: 01320058507,
        Email: 'jibon091@yahoo.com',
        img: 'https://kmp.police.gov.bd/public/upload/staff_image/9f7196f99d32caf5fca6156668e42328.jpg'
    }
]