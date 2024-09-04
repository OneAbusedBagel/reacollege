<?php
    $user1 = new User('Mark', 'mzuckerberg@gmail.com');

    celebrateBirthDay($user1);
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Users</title>
	</head>
	<body>
		<section>
			<p><?=$user1->getName();?></p>
			<p><?=$user1->getEmail();?></p>
			<p><?=$user1->getAge();?></p>
		</section>
	</body>
</html>
        
