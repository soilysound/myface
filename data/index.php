<?php
require __DIR__ . '/../vendor/autoload.php';

$faker = Faker\Factory::create('en_GB');

$data = [];
$persons = [];
$squads = [];

$tribes = [
     [
        'id' =>1,
        'name' =>'Content',
        'image' => 'http://news.sky.com/images/large-square-sky-news-logo.png',
        'background' => 'http://mohanroop.com/wp-content/uploads/2014/08/film-backgrounda3.jpg',
    ],
     [
        'id' =>2,
        'name' =>'Service',
        'image' => 'http://www.elettrotecnicasrl.net/img/sky_service_elettrotecnica2.jpg',
        'background' => 'https://i.ytimg.com/vi/2LoaD6tTB08/maxresdefault.jpg',
    ],
     [
        'id' =>3,
        'name' =>'Trading',
        'image' => 'http://www.nhsdiscountoffers.co.uk/wp-content/uploads/2015/11/frozen-remote1.jpg',
        'background' => 'https://danmayes.files.wordpress.com/2012/07/sky-news-studio.jpeg',
    ],
];


$squads = [
  [
      'id' =>1,
      'name' => 'Vrataski',
      'image' =>'http://www.hbo.com/assets/images/series/game-of-thrones/downloads/baratheon/wallpaper-baratheon-sigil-1600.jpg',
      'background' => 'http://theartmad.com/wp-content/uploads/2015/04/Movie-Wallpapers-8.jpg',
      'tribe' => $tribes[0],
  ],
  [
      'id' =>2,
      'name' => 'Varenburg',
      'image' =>'http://www.sandersconsulting.com/wp-content/uploads/2014/05/house-game-of-thrones-31246381-1600-1200.jpg',
      'background' => 'https://a8b9696a91de10cc2c20196ef7b687396774edd5.googledrive.com/host/0B0RTlVpNFM-GfkRsWVdJOXJaZkJIQXV5OXRhcDZEVFBfb0ZMak9TOWJhNnFEZ1ZYZ0Y0blU/movie-wallpapers-image-iWMx.jpg',
      'tribe' => $tribes[0],
  ],
  [
      'id' =>3,
      'name' => 'Responsive',
      'image' =>'http://www.hbo.com/assets/images/series/game-of-thrones/downloads/wallpaper-arryn-1600.jpg',
      'background' => 'http://hdwallpapers.move.pk/wp-content/uploads/2015/08/batman-with-other-bats.jpg',
      'tribe' => $tribes[0],
  ],
  [
      'id' =>4,
      'name' => 'Editorial Ops',
      'image' =>'http://images5.fanpop.com/image/photos/31200000/house-game-of-thrones-31246326-1600-1200.jpg',
      'background' => 'http://thesmashable.com/wp-content/uploads/2013/05/free-hd-despicable-me-2-wallpapers-desktop-backgrounds-despicable-me2-hd-desktop-wallpapers-despicable-me2-movie-wallpapers-despicable-me-wallpapers11.jpg',
      'tribe' => $tribes[0],
  ],



  [
      'id' =>5,
      'name' => 'Retensions',
      'image' =>'http://www.sandersconsulting.com/wp-content/uploads/2014/05/house-greyjoy-house-greyjoy-34367668-1600-1200.jpg',
      'background' => 'http://images5.alphacoders.com/418/418731.jpg',
      'tribe' => $tribes[0],
  ],
  [
      'id' =>6,
      'name' => 'Help',
      'image' =>'https://corngoblin.files.wordpress.com/2012/05/stark.jpg',
      'background' => 'http://images5.alphacoders.com/418/418731.jpg',
      'tribe' => $tribes[1],
  ],
  [
      'id' =>7,
      'name' => 'My Sky',
      'image' =>'https://i.ytimg.com/vi/b7_e9n-S2t8/maxresdefault.jpg',
      'background' => 'http://images5.alphacoders.com/418/418731.jpg',
      'tribe' => $tribes[1],
  ],
  [
      'id' =>8,
      'name' => 'Documenation',
      'image' =>'http://www.hbo.com/assets/images/series/game-of-thrones/downloads/wallpaper-tully-1600.jpg',
      'background' => 'http://images5.alphacoders.com/418/418731.jpg',
      'tribe' => $tribes[1],
  ],


  [
      'id' =>9,
      'name' => 'Accessory Shop',
      'image' =>'http://s2.uswitchstatic.com/_img/library/news_image/sky_tv_color_logo_634x306x24_expand_ha5ab3ba9.jpg',
      'background' => 'http://images5.alphacoders.com/418/418731.jpg',
      'tribe' => $tribes[2],
  ],
  [
      'id' =>10,
      'name' => 'Sky Store',
      'image' =>'http://winteriscoming.net/wp-content/uploads/2015/07/House-Manderly.jpg',
      'background' => 'http://images5.alphacoders.com/418/418731.jpg',
      'tribe' => $tribes[2],
  ],
  [
      'id' =>11,
      'name' => 'Box Office',
      'image' =>'http://images-cdn.moviepilot.com/image/upload/v1427126079/qcqtzptao4hbln0tlnpt.jpg',
      'background' => 'http://images5.alphacoders.com/418/418731.jpg',
      'tribe' => $tribes[2],
  ],
  [
      'id' =>12,
      'name' => 'Now TV',
      'image' =>'http://images6.fanpop.com/image/photos/37100000/game-of-thrones-game-of-thrones-37168821-1600-1200.jpg',
      'background' => 'http://images5.alphacoders.com/418/418731.jpg',
      'tribe' => $tribes[2],
  ],


];

$discs = [
  'Developer', 'QA', 'Scrum Master', 'Product Owner', 'Head of Technology',
];

$gender = [
  'male', 'female',
];

for ($i=1; $i<=96; $i++)  {
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

    $squadnum = ($i % 12);
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
        'squad' =>$squads[$squadnum],
    ];

    $persons[] = $person;
}

$data = [
    'tribes' => $tribes,
    'squads' => $squads,
    'people' => $persons,
];

$data = json_encode($data, JSON_PRETTY_PRINT);
$filename = __DIR__.'/data.json';
file_put_contents($filename, $data);