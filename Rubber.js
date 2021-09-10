class Rubber{
	constructor(x,y)
	{
		// var options={
		// 	restitution:0.3
		// 	friction:5
		// 	density:1
		// }

		// var options={
		// 	restitution:5,
		// 	friction:5
		// 	density:20
		// }

         var options={
		 	'restitution':0.3,
		 	'friction':5,
		 	'density':1
		 }

		// var options{
		// 	restitution:5,
		// 	friction:5,
		// 	density:20
		// }

 
		this.x=x;
		this.y=y;
		
		// this.body=Bodies.ellipse(this.x, this.y, (this.r-20)/2, options)
		// World.add(world, this.body);

		// this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		// World.add(world, this.body);

		 this.body=Bodies.rectangle(this.x, this.y, 150,40, options)
		 World.add(world, this.body);
		 this.width = 150;
         this.height = 40;

		
		// this.body=Bodies(this.x, this.y, (this.r-20)/2, options)
		// World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER);
			rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("green");
			// ellipse(0,0,this.r, this.r);
			// circle(0,0,this.r, this.r);
		     rect(0,0,this.width,this.height);
			// body(0,0,this.r, this.r);
			pop()
	}

}