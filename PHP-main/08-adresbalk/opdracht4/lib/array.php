<?php
$products = [
    array(
        'release' => '23-03-2018',
        'imageSRC' => 'images/9200000053083967.jpg',
        'console' => 'PlayStation 4',
        'name' => 'Ni No Kuni II: Revenant Kingdom',
        'price' => '€ 49.99',
    ),
    array(
        'release' => '27-03-2018',
        'imageSRC' => 'images/9200000078668488.jpg',
        'console' => 'PlayStation 4',
        'name' => 'Far Cry 5 - Deluxe Edition',
        'price' => '€ 59.99',
    ),
    array(
        'release' => '29-03-2018',
        'imageSRC' => 'images/9200000090287767.jpg',
        'console' => 'PlayStation 4',
        'name' => 'Injustice 2 - Legendary Edition',
        'price' => '€ 59.99',
    ),
    array(
        'release' => '30-03-2018',
        'imageSRC' => 'images/9200000084844101.jpg',
        'console' => 'PlayStation 4',
        'name' => 'The Lost Child',
        'price' => '<del>€ 59.99</del> € 49.99',
    ),
    array(
        'release' => '30-03-2018',
        'imageSRC' => 'images/9200000088397115.jpg',
        'console' => 'PlayStation 4',
        'name' => 'Attack on Titan 2 - A.O.T. 2',
        'price' => '€ 59.99',
    ),
    array(
        'release' => '25-05-2018',
        'imageSRC' => 'images/9200000088311502.jpg',
        'console' => 'PlayStation 4',
        'name' => 'Dark Souls Remastered',
        'price' => '€ 59.99',
    ),
    array(
        'release' => '26-10-2018',
        'imageSRC' => 'images/9200000067180307.jpg',
        'console' => 'PlayStation 4',
        'name' => 'Red Dead Redemption 2',
        'price' => '<del>€ 49.99</del> € 39.99',
    ),
    array(
        'release' => '31-12-2018',
        'imageSRC' => 'images/9200000082972427.jpg',
        'console' => 'PlayStation 4',
        'name' => 'Biomutant',
        'price' => '€ 49.99',
    ),
];

function makeCatalogue(array $products):string {
    $sort = $_GET['sort'] ?? 'ascending';
    $amount = $_GET['amount'];
    echo $sort;
    $sort === 'ascending' ? sort($products) : rsort($products);

    $names = array_column($products, 'name');
    print_r($names);
    array_multisort($names, $sort == 'ascending' ? SORT_DESC : SORT_ASC, $products );

    $fullCatalogue = '<section id="products">';
    // somehow make the foreachloop only happen activate [$amount] times. - or find another loop to work with that also defines the nestled array variables -
    // for ($i=0; $i < $amount; $i++) { 
        foreach ($products as $games => $gameContent){
            $fullCatalogue .= '<article>';
            $fullCatalogue .= '<span class="release">' .$gameContent['release']. '</span>';
            $fullCatalogue .= '<img src="' .$gameContent['imageSRC']. '" width="168" height="210"> ';
            $fullCatalogue .= '<span class="console">' .$gameContent['console']. '</span>';
            $fullCatalogue .= '<span class"name">' .$gameContent['name']. '</span>';
            $fullCatalogue .= '<span class="price">' .$gameContent['price']. '</span>';
            $fullCatalogue .= '</article>';
        }
    // }
    $fullCatalogue .= '<section id="products">';

    return $fullCatalogue;
} 


?>
