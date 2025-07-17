export class Service {
    getRecipes(): { id: number, title: string, img: string }[] {
        return this.recipes.map(r => ({
            id: r.id,
            title: r.title,
            img: r.img,
            menu: r.menu,
        }));
    }

    public recipes = [
        {
            id: 1,
            title: 'Side Dishes',
            img: 'https://static.life.ru/posts/2018/06/1127504/50b9185186e4c1f3fd4320ec9aea4c89.jpg',
            menu: [
                {
                    id: 1,
                    title: 'Mashed Potatoes',
                    img: 'https://avatars.mds.yandex.net/i?id=f4b41dcdb4ee187ee6a5ec26f0dd0207b54dffc9-10098996-images-thumbs&n=13',
                    description: ''
                },
                {
                    id: 2,
                    title: 'Roasted Vegetables',
                    img: 'https://i.pinimg.com/originals/70/72/12/707212e390663299fbae0644a89919f6.jpg',
                    description: ''
                },
                {
                    id: 3,
                    title: 'Rice Pilaf',
                    img: 'https://avatars.mds.yandex.net/i?id=e6d3f4ee4847327fc4e403b1e23d853b_l-5233353-images-thumbs&n=13',
                    description: ''
                },
                {
                    id: 4,
                    title: 'Grilled Asparagus',
                    img: 'https://i.pinimg.com/originals/a3/a9/e8/a3a9e8541e6d86b67494231d478526d8.png',
                    description: ''
                },
                {
                    id: 5,
                    title: 'Coleslaw',
                    img: 'https://avatars.mds.yandex.net/i?id=1c4e9738182f4ab96c1e0337e41f9c42bdcc94d1-12624979-images-thumbs&n=13',
                    description: ''
                },
                {
                    id: 6,
                    title: 'Garlic Bread',
                    img: 'https://s.yimg.com/ny/api/res/1.2/joAryIcnh2t37mrgHXEt7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/the_daily_meal_185/e9369c7bacdd00c445ef1b53db8bfc24',
                    description: ''
                },
                {
                    id: 7,
                    title: ' Couscous',
                    img: 'https://avatars.mds.yandex.net/i?id=9c6c184a9b88990c6da57d17c9eed9e2_l-9461051-images-thumbs&n=13',
                    description: ''
                },
                {
                    id: 8,
                    title: 'Quinoa Salad',
                    img: 'https://avatars.mds.yandex.net/i?id=b987266972c5ccf145d08d57a11e8e41edca9027-6428252-images-thumbs&n=13',
                    description: ''
                },
                {
                    id: 9,
                    title: 'Mac & Cheese',
                    img: 'https://i.pinimg.com/originals/0e/ed/ec/0eedeccea73cce4ca54200411713f081.jpg',
                    description: ''
                },
            ]
        },
        {
            id: 2,
            title: 'Salads',
            img: 'https://static.tildacdn.com/tild3734-3738-4430-a164-383039313533/greek.jpg',
        },
        {
            id: 3,
            title: 'Soups',
            img: 'https://i.pinimg.com/originals/2a/9f/85/2a9f85f4053ab5e7eeea8dce98905a5e.jpg',
        },
        {
            id: 4,
            title: 'Desserts',
            img: 'https://www.sheknows.com/wp-content/uploads/2018/08/pgxaodit8dwl0rgnmhvh.jpeg?w=1024',
        },
        {
            id: 5,
            title: 'Beverages / Drinks',
            img: 'https://i.pinimg.com/736x/44/92/bc/4492bcaa19bc9b68ad04f9cbdcdb4517.jpg',
        },
        {
            id: 6,
            title: 'Meat Dishes',
            img: 'https://www.rutage.com/wp-content/uploads/2024/02/SUNDAY-ROAST.jpg',
        },
        {
            id: 7,
            title: 'Fish & Seafood Dishes',
            img: 'https://pp.userapi.com/c636917/v636917788/29162/nDHP5ITEy3g.jpg',
        },
        {
            id: 8,
            title: 'Italian Cuisine',
            img: 'https://imageproxy.wolt.com/venue/6710cf37efd86536b9432517/5aaf8432-8c67-11ef-9958-8aec63cdb56a_shutterstock_2261748829.jpg',
        },
        {
            id: 9,
            title: 'Asian Cuisine',
            img: 'https://as2.ftcdn.net/jpg/01/36/55/01/1000_F_136550166_3MqqURsOk11DdLzqFHD6RyE5KKGakeEd.jpg',
        },
        {
            id: 10,
            title: 'Mexican Cuisin',
            img: 'https://fs.tonkosti.ru/74/cx/74cxbzl9iko4w8wsk4gg4k4go.jpg',
        },
    ]
}