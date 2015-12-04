<?php
require __DIR__ . '/../vendor/autoload.php';

$faker = Faker\Factory::create('en_GB');

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
      'background' => 'https://danmayes.files.wordpress.com/2012/07/sky-news-studio.jpeg',
      'tribe' => $tribe[0],
  ],
];

$discs = [
  'Developer', 'QA', 'Scrum Master', 'Product Owner', 'Head of Technology',
];

$gender = [
  'male', 'female',
];

for ($i=1; $i<=3; $i++)  {
    $gen = $gender[rand(0,1)];

    $title = $faker->title;
    $name = $faker->firstName($gen).' '.$faker->lastName;
    $dob = $faker->dateTimeBetween($startDate = '-60 years', $endDate = '-18 years') ->format('Y-m-d');
    $email = str_replace(' ', '.', strtolower($name)).'@sky.uk';
    $phone = $faker->phoneNumber;
    $slackname = '@'.str_replace(' ', '.', strtolower($name));

    $disc = $faker->shuffle($discs);
    $disc= array_slice($disc, 0, rand(1, count($discs)));

    $startDate = $faker->dateTimeBetween($startDate = '-20 years') ->format('Y-m-d');
    $image = $faker->imageUrl('300', '300', 'animals', true, 'SkyFace');

    $person = [
        'id' =>$i,
        'title' => $title,
        'name' =>$name,
        'dob' =>$dob,
        'email' => $email,
        'phone' =>$phone,
        'slackname' => $slackname,
        'discipline' => $disc,
        'startDate' =>$startDate,
        'image' =>$image,
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