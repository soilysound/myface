<?php

$data = [];
$persons = [];


$tribe = [
     [
        'id' =>1,
        'name' =>'Content',
        'image' => 'http://s2.uswitchstatic.com/_img/library/news_image/sky_tv_color_logo_634x306x24_expand_ha5ab3ba9.jpg',
        'background' => 'https://danmayes.files.wordpress.com/2012/07/sky-news-studio.jpeg',
    ],
];

$squad = [
  [
      'id' =>1,
      'name' => 'Vrataski',
      'image' =>'http://s2.uswitchstatic.com/_img/library/news_image/sky_tv_color_logo_634x306x24_expand_ha5ab3ba9.jpg',
      'tribe' => $tribe[0],
  ],
];


for ($i=1; $i<=3; $i++)  {
    $person = [
        'id' =>$i,
        'title' => 'Dr',
        'name' =>'Jamie Hobbs',
        'dob' =>'1990-12-04',
        'email' => 'jamie.hobbs@sky.uk',
        'phone' =>'0123456789',
        'slackname' =>'@jamie.hobbs',
        'discipline' => [
            'Developer',
            'QA',
            'Scrum Master'
        ],
        'startDate' =>'2015-12-04',
        'image' =>'http://webneel.com/sites/default/files/images/project/best-portrait-photography-regina-pagles%20(10).jpg',
        'squad' =>$squad[0],
    ];

    $persons[] = $person;
}

$data = [
    'tribes' => $tribe,
    'squads' => $squad,
    'people' => $persons,
];

$data = json_encode($data, JSON_PRETTY_PRINT);
$filename = __DIR__.'/data.json';
file_put_contents($filename, $data);