var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    accessToken: 'pk.eyJ1IjoiZmFsaTkyOSIsImEiOiJjbGg5a2NzNjYwOGV5M3JwYjloemxjaXBvIn0.bmvXxtOYS6FGQGmQMvLgLw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'light',
    use3dTerrain: false,
    title: 'Rajasthan',
    subtitle: 'The Land of Kings: A stroll through its history',
    byline: 'By Fatema Ali',
    footer: 'Source: Story text from Culture Trip, March 2018. Data from <a href="https://theculturetrip.com/asia/india/articles/a-brief-history-of-rajasthan-the-royal-state-of-india/">Mapbox Storytelling</a>',
    chapters: [
        {
            id: 'Aravalli',
            alignment: 'center',
            hidden: false,
            title: 'The Aravalli Mountain Range',
            image: 'https://2.bp.blogspot.com/-MHwCjthSBRs/VFuJITG1ehI/AAAAAAAAIIk/A7pFpGx8c4g/s1600/amer%2Bview%2Bfrom%2Btop%2BIMG_3506.jpg',
            description: 'The Aravalli Mountain Range is a mountainous region in Rajasthan that holds the history of ancient civilizations taht date back to 2000BC. It was home to the Aryans around this time and was later inhabited by the Mauryans in 321-184 BCE and it would then be home to many empires like the Hunas, Arjunyas, Yaudheyas, and Saka Satraps.',
            location: {
                center: [76.59929, 27.54387],
                zoom: 14.17,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rajput',
            alignment: 'center',
            hidden: false,
            title: 'The Rajputs of Jodhpur',
            image: 'https://images.thrillophilia.com/image/upload/s--3yZUYN_b--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/049/788/original/1514445257_jodhpur.jpg.jpg?1514445257',
            description: 'In the 9th century, the settlement of the Rajput dynasty came along. They settled in the cities of Jaipur, Udaipur and Jodhpur, but the main lineage and history stems from their original settelment in the royal city of Jodhpur. The Rajputs were warriors and their power allowed the state to grow further. The empire split up into 21 dynasties and 36 royal clans but it remains the most powerful one to this day. The royal Rajputs of Rajasthan still reside in the Udaipur palace.',
            location: {
                center: [73.02890, 26.33108],
                zoom: 12.61,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],    
            onChapterExit: []
        },
        {
            id: 'mewar13thcentury',
            alignment: 'left',
            hidden: false,
            title: 'The Powerful Seat of Mewar',
            image: 'https://th.bing.com/th/id/OIP.otr8nDgqnBfvqdjz5KMJpQHaE8?pid=ImgDet&rs=1',
            description: 'Around the 13th century, the city of Mewar was under the Rajput rule but it was desired by many. Akhbar, the Mughal emperor, married Jodha bai, the daughter of a Rajput ruler, in order to gain more power. Many rajputan leaders formed alliances with Akhbar, but many were still against the idea of a Muslim ruler and refused to bow down to him. Udai Singh, a ruler of Mewar, fought with Akhbar which ended in Akhbar gaining control of Mewar and the entirety of Rajasthan came under his control.',
            location: {
                center: [73.68264, 24.57984],
                zoom: 19.17,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'junagarh1478',
            alignment: 'fully',
            hidden: false,
            title: 'The Bikaner Junagarh Fort',
            image: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2018/02/junagarh-fort.jpg',
            description: 'Although ruled by the Mughals, much of Rajasthans forts and architecture was built by the Rajputs. Junagarh fort in Bikaner marks one of the many historical sites put in place by the Rajput line.' ,
            location: {
                center: [73.31832, 28.10030],
                zoom: 15.50,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kumbhalgarh1576',
            alignment: 'fully',
            hidden: false,
            title: 'The Battle of 1576',
            image: 'https://th.bing.com/th/id/OIP.RqZelslq31h3LyLwirpDhAHaE7?pid=ImgDet&rs=1',
            description: 'In 1576, a battle in the city of Kumbhalgarh took place and it ended with Maharana Pratap severly injured, and Akhbar victorious once again. The Mughal reign came to an end in 1582 though when a battle in battle in Dewair led to the victory of Rana Pratap.' ,
            location: {
                center: [25.137899, 73.576729],
                zoom: 12.92,
                pitch: 51.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bhangarh16thcentury',
            alignment: 'fully',
            hidden: false,
            title: 'Bhangarh Fort known as the most haunted place in India',
            image: 'https://th.bing.com/th/id/OIP.u6kUfz39FcEP5Jw-_HU7KQHaEn?pid=ImgDet&rs=1',
            description: 'The 16th century marked the construction of what would become the most haunted place in India. Bhangarh fort was constructed in the 16th century. Legend has it, a sage once lived within the fort area. He cursed that if any building or monument were to built taller than his own home, it would be destroyed. The columns of the fort were built taller than his home and cast a shadow on it, ultimately being destroyed by his curse leading to the death of everyone in the fort town. Another tale tells that a priest who practiced black magic, fell in love with the princess of Bhangarh. He created a love potion to get her to fall in love with him but she refused and instead threw it on a rock that crushed the priest to death. Before he died though, he cursed the entire village which led to its destruction and the demise of everyone, leaving the remains of the fort haunted. People say that whoever enters it after sunset, never returns.',
            location: {
                center: [76.30913, 27.09481],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'maratha18thcentury',
            alignment: 'right',
            hidden: false,
            title: 'The rise and fall of the Maratha Empire',
            image: 'https://internationaljournalofresearch.files.wordpress.com/2020/06/rajasthan-jaipur-148046451622-orijgp.jpg?w=1200',
            description: 'In the 18th century, the ruler of the Maratha empire, Peshwa Bajirao, expanded his rule over the northern parts of Rajasthan, namely Jaipur which is also currently the capital of the state. His rule came to a quick end though when the British East India Company entered the area in the late 18th century. Most Rajput states joined hands with the British East India Company and Rajasthan became its own independent state.',
            location: {
                center: [75.82199, 26.91805],
                zoom: 13.91,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rajasthantoday',
            alignment: 'fully',
            hidden: false,
            title: 'The Royal of Rajasthan today',
            image: 'https://th.bing.com/th/id/OIP.rTZEdaFDKuGHlZM6VKQ0vgHaFj?pid=ImgDet&rs=1',
            description: 'Rajasthan today still contains the ancient royal remains and culture of its rich history. It is now the largest state in the Indian Republic. If you ever want to see the royal palaces of India or the most haunted site of the country, Rajasthan is the place to go.',
            location: {
                center: [73.37151, 26.94148],
                zoom: 8.97,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo'
            rotateAnimation: false,
            callback: '',
            onChapterEnter: []
            onChapterExit: []
        }
    ]
};        