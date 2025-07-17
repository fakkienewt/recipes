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
                },
                {
                    id: 2,
                    title: 'Roasted Vegetables',
                    img: 'https://i.pinimg.com/originals/70/72/12/707212e390663299fbae0644a89919f6.jpg',
                },
                {
                    id: 3,
                    title: 'Rice Pilaf',
                    img: 'https://avatars.mds.yandex.net/i?id=e6d3f4ee4847327fc4e403b1e23d853b_l-5233353-images-thumbs&n=13',
                },
                {
                    id: 4,
                    title: 'Grilled Asparagus',
                    img: 'https://i.pinimg.com/originals/a3/a9/e8/a3a9e8541e6d86b67494231d478526d8.png',
                },
                {
                    id: 5,
                    title: 'Garlic Bread',
                    img: 'https://s.yimg.com/ny/api/res/1.2/joAryIcnh2t37mrgHXEt7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/the_daily_meal_185/e9369c7bacdd00c445ef1b53db8bfc24',
                },
                {
                    id: 6,
                    title: ' Couscous',
                    img: 'https://avatars.mds.yandex.net/i?id=9c6c184a9b88990c6da57d17c9eed9e2_l-9461051-images-thumbs&n=13',
                },
                {
                    id: 7,
                    title: 'Quinoa Salad',
                    img: 'https://avatars.mds.yandex.net/i?id=b987266972c5ccf145d08d57a11e8e41edca9027-6428252-images-thumbs&n=13',
                },
            ]
        },
        {
            id: 2,
            title: 'Salads',
            img: 'https://static.tildacdn.com/tild3734-3738-4430-a164-383039313533/greek.jpg',
            menu: [
                {
                    id: 1,
                    title: 'Caesar Salad',
                    img: 'https://moreprodukty.info/wp-content/uploads/2022/03/3638fb553dca9c238234ad4d47128f43-e1646208811588.jpg',
                },
                {
                    id: 2,
                    title: 'Greek Salad',
                    img: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6690413b733033597ba72720_66911f667eb4194068587b61/scale_1200',
                },
                {
                    id: 3,
                    title: 'Caprese Salad',
                    img: 'https://avatars.mds.yandex.net/i?id=a5f74a22403e30c50447d8ee346daac1_l-9844111-images-thumbs&n=13',
                },
                {
                    id: 4,
                    title: 'Cobb Salad',
                    img: 'https://images.gastronom.ru/-AHtB-8-muI_Z0eoPW9apEmRLBVbjxJh9MAKX2WrWoc/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2JiNzdjNTVjLWY3MjQtNGFkMy05OWZkLTdiZDRkZDg0Njg1My5qcGc.webp',
                },
                {
                    id: 5,
                    title: 'Salade Niçoise',
                    img: 'https://avatars.mds.yandex.net/i?id=1043f785abef39955d34e699fdb0a85a_l-5232391-images-thumbs&n=13',
                },
                {
                    id: 6,
                    title: 'Tabbouleh',
                    img: 'https://i.ytimg.com/vi/ivoJ5na27EQ/maxresdefault.jpg',
                },
                {
                    id: 7,
                    title: 'Waldorf Salad',
                    img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/newscms/2017_01/1185643/classic-waldorf_salad-today-1660104-tease.jpg',
                },
                {
                    id: 8,
                    title: 'Olivier Salad',
                    img: 'https://images.thesymbol.ru/upload/img_cache/6a2/6a29b377a6f179ded994dcb44614e4ba_ce_3000x1666x0x123_cropped_1200x628.jpg',
                },
                {
                    id: 9,
                    title: 'Shopska Salad',
                    img: 'https://cdn.tasteatlas.com/images/dishes/2a65dc1cd8324f7690c35bf13d68d746.jpg?m=facebook',
                },
            ]
        },
        {
            id: 3,
            title: 'Soups',
            img: 'https://i.pinimg.com/originals/2a/9f/85/2a9f85f4053ab5e7eeea8dce98905a5e.jpg',
            menu: [
                {
                    id: 1,
                    title: 'Chicken Noodle Soup',
                    img: 'https://i.pinimg.com/originals/4a/4f/fd/4a4ffd40e80e3d3d1e9940040a9c16e4.jpg'
                },
                {
                    id: 2,
                    title: 'Tomato Soup',
                    img: 'https://sun9-34.userapi.com/impg/m5x-qu7wAS7ehjYy3UAM3LvTEk7C7gkp1Ks7DQ/wF9bTD-7RjM.jpg?size=1920x1080&quality=95&sign=60ff2d9aab7252c3853723753f2f85c4&type=album'
                },
                {
                    id: 3,
                    title: 'French Onion Soup',
                    img: 'https://img-s1.onedio.com/id-5e95a408ea0fc88019d66c5e/rev-0/w-1200/h-610/f-jpg/s-f226d5bafae7f87ee73f19cb7c53ce2ec28f7d51.jpg'
                },
                {
                    id: 4,
                    title: 'Minestrone',
                    img: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_662160f82d4e14129540be22_662161ab824b084ed774ffd2/scale_1200'
                },
                {
                    id: 5,
                    title: 'Borscht',
                    img: 'https://pic.rutubelist.ru/video/2024-10-16/7f/94/7f94e3d44035d0e75f038091441804a6.jpg'
                },
                {
                    id: 6,
                    title: 'Gazpacho',
                    img: 'https://avatars.mds.yandex.net/i?id=f474244e0087300d568e8d386c2f42da0c8bc26f-12643871-images-thumbs&n=13'
                },
                {
                    id: 7,
                    title: 'New England Clam Chowder',
                    img: 'https://edatop.ru/uploads/posts/2021-01/1610530414_edatop.ru_sup-chauder.jpg'
                },
                {
                    id: 8,
                    title: 'Pho',
                    img: 'https://avatars.mds.yandex.net/get-mpic/12490566/2a0000018d417e8cee54a60b68ba02320623/orig'
                },
                {
                    id: 9,
                    title: 'Lentil Soup',
                    img: 'https://avatars.mds.yandex.net/i?id=ec7e69d25daffb3f660fba4eb2756b7c_l-9029853-images-thumbs&n=13'
                },
                {
                    id: 10,
                    title: 'Butternut Squash Soup',
                    img: 'https://lafoy.ru/photo_b/foto-2799-0.jpg'
                },
            ]
        },
        {
            id: 4,
            title: 'Desserts',
            img: 'https://www.sheknows.com/wp-content/uploads/2018/08/pgxaodit8dwl0rgnmhvh.jpeg?w=1024',
            menu: [
                {
                    id: 1,
                    title: 'Tiramisu',
                    img: 'https://avatars.mds.yandex.net/i?id=48960a2dc73ab73fe644f127e48052583f8ccc33-10348710-images-thumbs&n=13'
                },
                {
                    id: 2,
                    title: 'Crème Brûlée',
                    img: 'https://i.pinimg.com/originals/b7/ea/60/b7ea60fa65ed80b2c53eab3a2097417a.jpg'
                },
                {
                    id: 3,
                    title: 'Cheesecake',
                    img: 'https://www.allrecipes.com/thmb/tduRcp1id0nD5nh9Bi052PvAx38=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1916x819:1918x821)/AR-155222-philadelphia-classic-cheesecake-2x1-hero--3b6aaa55c17846fcb3609a6c8c78d4c7.jpg'
                },
                {
                    id: 4,
                    title: 'Chocolate Fondant',
                    img: 'https://s.yimg.com/ny/api/res/1.2/L9wz4CFOHFqVY9ZMaR8m3Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media.zenfs.com/en/wfla_article_174/76e22a3f6cdd0723fe5db242f33aa53e'
                },
                {
                    id: 5,
                    title: 'Baklava',
                    img: 'https://avatars.mds.yandex.net/get-altay/13474366/2a000001916b064d40581e1928c5a3bedc8a/XXL_height'
                },
                {
                    id: 7,
                    title: 'Mochi',
                    img: 'https://cs13.pikabu.ru/post_img/2023/05/30/6/og_og_1685439836287149146.jpg'
                },
                {
                    id: 8,
                    title: 'Apple Pie',
                    img: 'https://avatars.mds.yandex.net/i?id=61cf717a4f0e4805be3929144dcd0160_l-4770953-images-thumbs&n=13'
                },
                {
                    id: 9,
                    title: 'Gulab Jamun',
                    img: 'https://avatars.mds.yandex.net/i?id=6fa7df8f8ef5962fceed80415110ca89291a4f5d-5664195-images-thumbs&n=13'
                },
            ]
        },
        {
            id: 5,
            title: 'Meat Dishes',
            img: 'https://www.rutage.com/wp-content/uploads/2024/02/SUNDAY-ROAST.jpg',
            menu: [
                {
                    id: 1,
                    title: 'Beef Stroganoff',
                    img: 'https://resizer.mail.ru/p/6ec6157d-facb-5519-b0a5-40696bdc6b1f/AQAFIAPvyDYvmw6k7jR1e9dl9TnZCGZh3CV_0f4WaLHCDDt9huKk5bs1QpuJ8NfkYRnXUVzMg3n4Ub0sWBNRntaKWqk.jpg'
                },
                {
                    id: 2,
                    title: 'Grilled Steak with Garlic Butter',
                    img: 'https://i.pinimg.com/originals/2b/ef/49/2bef49a4b922a9b7c24f02d95e952108.jpg'
                },
                {
                    id: 3,
                    title: 'Slow Cooker BBQ Pulled Pork',
                    img: 'https://i.pinimg.com/originals/04/91/b2/0491b23745e61fdea4d0dcbf8f6c0b2c.jpg'
                },
                {
                    id: 4,
                    title: 'Chicken Cordon Bleu',
                    img: 'https://avatars.mds.yandex.net/i?id=ec5b20d9c56668c2bcf234a2a46ad0db64afadd8-4184248-images-thumbs&n=13'
                },
                {
                    id: 5,
                    title: 'Beef Bourguignon',
                    img: 'https://i.ytimg.com/vi/BLJjzBtqVHc/maxresdefault.jpg'
                },
                {
                    id: 6,
                    title: 'Pork Chops with Mustard and Breadcrumbs',
                    img: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/de7b3950371a1a8cb4205facacd983ca.jpg'
                },
                {
                    id: 7,
                    title: 'Lomo Saltado',
                    img: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_669c3eebc65ec91dbff581d8_66cd7f5e5f5ed25429e9483c/scale_1200'
                },
                {
                    id: 8,
                    title: 'Meatballs in Tomato Sauce',
                    img: 'https://avatars.mds.yandex.net/i?id=d44397af622ba1a7f7e319bc8b7881e076f36aad-12538455-images-thumbs&n=13'
                },
                {
                    id: 9,
                    title: 'Rack of Lamb with Herbs',
                    img: 'https://avatars.mds.yandex.net/i?id=bb28a79d822ae9ded346c74c109b9ac6_l-4817585-images-thumbs&n=13'
                },
                {
                    id: 10,
                    title: 'Chateaubriand',
                    img: 'https://avatars.mds.yandex.net/get-altay/965007/2a000001628845c0b9251881fba7370eed7c/XXL'
                }
            ]
        },
        {
            id: 6,
            title: 'Fish & Seafood Dishes',
            img: 'https://pp.userapi.com/c636917/v636917788/29162/nDHP5ITEy3g.jpg',
            menu: [
                {
                    id: 1,
                    title: 'Grilled Salmon with Avocado Salsa',
                    img: 'https://avatars.mds.yandex.net/i?id=f20a1a163c616c65bb1a8cb20a90b9b85216fa8ee49cda98-13235031-images-thumbs&n=13'
                },
                {
                    id: 2,
                    title: 'Shrimp Scampi',
                    img: 'https://s.yimg.com/ny/api/res/1.2/Lu245nMrWwU2hR3rWMecxQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzQ-/https://media.zenfs.com/en/foodie_784/7c4404a846e467b58e683f7735c34530'
                },
                {
                    id: 3,
                    title: 'Fish Tacos',
                    img: 'https://i.pinimg.com/originals/37/15/fe/3715fe448ab9b6750d1fe72d124853ce.jpg'
                },
                {
                    id: 4,
                    title: 'Seafood Paella',
                    img: 'https://i.pinimg.com/originals/87/b7/f6/87b7f6f17879a1a709ec828c620b52fc.jpg'
                },
                {
                    id: 5,
                    title: 'Baked Cod with Lemon and Herbs',
                    img: 'https://avatars.mds.yandex.net/i?id=b68587570a45de5bfaff98bdd9bb30d73a5d0ce6336c7cbb-13604111-images-thumbs&n=13'
                },
                {
                    id: 6,
                    title: 'Lobster Rolls',
                    img: 'https://avatars.mds.yandex.net/i?id=ae136011e00a459eccab3b5770c7dae6_l-4576159-images-thumbs&n=13'
                },
                {
                    id: 7,
                    title: 'Mussels in White Wine Sauce',
                    img: 'https://avatars.mds.yandex.net/i?id=ef1a4c3d9272e792e08e5bb75b419cc5_l-10096158-images-thumbs&n=13'
                },
                {
                    id: 8,
                    title: 'Tuna Poke Bowl',
                    img: 'https://i.pinimg.com/originals/9e/f9/77/9ef97778aebe5aebbeba2cdbef11f4a9.jpg'
                },
                {
                    id: 9,
                    title: 'Clam Chowder',
                    img: 'https://s.yimg.com/ny/api/res/1.2/WLSKvcP3kBQJw4l.G.4U5A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzQ-/https://media.zenfs.com/en/mashed_603/16e15054857ee4c4c81f5847b5c3d182'
                },
            ]
        },
        {
            id: 7,
            title: 'Italian Cuisine',
            img: 'https://imageproxy.wolt.com/venue/6710cf37efd86536b9432517/5aaf8432-8c67-11ef-9958-8aec63cdb56a_shutterstock_2261748829.jpg',
            menu: [
                {
                    id: 1,
                    title: 'Pizza Napoletana',
                    img: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65c6a321ee792b5771d6079b_65c6a33eee792b5771d60f80/scale_1200'
                },
                {
                    id: 2,
                    title: 'Spaghetti Carbonara',
                    img: 'https://resizer.mail.ru/p/251b00fb-e521-54f0-8812-331bcf39e62b/AQAFJS2UQXvc7Eg7jDVujyOxcAM-lXZCo3xcCR9IQKn33epn2JoK8U9fiJJTmP6iddvLvvGRsGZBXYHabWia0RN-KG4.jpg'
                },
                {
                    id: 3,
                    title: 'Lasagne alla Bolognese',
                    img: 'https://avatars.mds.yandex.net/i?id=292a544e4349474d7da8826468312f3f_l-10521836-images-thumbs&n=13'
                },
                {
                    id: 4,
                    title: 'Risotto alla Milanese',
                    img: 'https://avatars.mds.yandex.net/i?id=6f4417e43a9c5bfcb68c4a609d273793_l-5878985-images-thumbs&n=13'
                },
                {
                    id: 5,
                    title: 'Ossobuco alla Milanese',
                    img: 'https://i.pinimg.com/originals/e2/9e/f9/e29ef9d713a9926a12fd4940c234ad4c.jpg'
                },
                {
                    id: 6,
                    title: 'Tiramisù',
                    img: 'https://avatars.mds.yandex.net/i?id=48960a2dc73ab73fe644f127e48052583f8ccc33-10348710-images-thumbs&n=13'
                },
                {
                    id: 7,
                    title: 'Fettuccine Alfredo',
                    img: 'https://i.ytimg.com/vi/bG8IRCtKNgE/maxresdefault.jpg'
                },
                {
                    id: 8,
                    title: 'Caprese Salad',
                    img: 'https://s.yimg.com/ny/api/res/1.2/.R5t0cm0Orh0x1ALJzJusg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02Nzc-/https://media.zenfs.com/en/chowhound_739/bc382b55f30c34029fd950d6dce10658'
                },
                {
                    id: 9,
                    title: 'Pesto alla Genovese',
                    img: 'https://i.ytimg.com/vi/IfdiJ2zh7_4/maxresdefault.jpg'
                },
                {
                    id: 10,
                    title: 'Gelato',
                    img: 'https://avatars.dzeninfra.ru/get-zen_doc/2977209/pub_6223fbaa45650202fb87c3c3_6223fdd627ff833e1e7c0e27/scale_1200'
                },
            ]
        },
        {
            id: 8,
            title: 'Asian Cuisine',
            img: 'https://as2.ftcdn.net/jpg/01/36/55/01/1000_F_136550166_3MqqURsOk11DdLzqFHD6RyE5KKGakeEd.jpg',
            menu: [
                {
                    id: 1,
                    title: 'Sushi',
                    img: 'https://avatars.mds.yandex.net/i?id=b66b8338f36bc4e7586140e4cfd42781_l-5236101-images-thumbs&n=13'
                },
                {
                    id: 2,
                    title: 'Biryani',
                    img: 'https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg'
                },
                {
                    id: 3,
                    title: 'Peking Duck',
                    img: 'https://avatars.mds.yandex.net/i?id=9db4bbd68b57f8a51dc28f68c4b4a4fe_l-9154408-images-thumbs&n=13'
                },
                {
                    id: 4,
                    title: 'Banh Mi',
                    img: 'https://sun9-60.userapi.com/nABlznr_zKt6TdxIv-3EHIsXX5T5jwdzfm-1xA/O4nD8fQETY8.jpg'
                },
                {
                    id: 5,
                    title: 'Satay',
                    img: 'https://avatars.mds.yandex.net/i?id=a68a7fe0aa4cf003beedc8423bc390ecea72cde3534ece6d-7090441-images-thumbs&n=13'
                },
            ]
        },
        {
            id: 9,
            title: 'Mexican Cuisin',
            img: 'https://fs.tonkosti.ru/74/cx/74cxbzl9iko4w8wsk4gg4k4go.jpg',
            menu: [
                {
                    id: 1,
                    title: 'Tacos al Pastor',
                    img: 'https://avatars.mds.yandex.net/i?id=e63a04bde197c568723e7ac27e620aed4a611f2a-3071791-images-thumbs&n=13'
                },
                {
                    id: 2,
                    title: 'Tamales',
                    img: 'https://avatars.dzeninfra.ru/get-zen_doc/4303740/pub_620fc1f0c8c5f1182bedcaef_620fc3ba53856862a4cecb7b/scale_1200'
                },
                {
                    id: 3,
                    title: 'Chilaquiles',
                    img: 'https://s.yimg.com/ny/api/res/1.2/HqfNzf12TV1WXbMt8ANrQQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzQ-/https://media.zenfs.com/en/the_daily_meal_185/54d66657822b31ae630f67ba2defa3b1'
                },
                {
                    id: 4,
                    title: 'Elote',
                    img: 'https://avatars.mds.yandex.net/i?id=5b1cc89e6eaa087f5ab51ba4b1d21234_l-8411743-images-thumbs&n=13'
                },
                {
                    id: 5,
                    title: 'Tlayudas',
                    img: 'https://avatars.mds.yandex.net/i?id=ea000a7ae1cb825db6e22a64a5225149_l-10735006-images-thumbs&n=13'
                },
                {
                    id: 6,
                    title: 'Enchiladas',
                    img: 'https://avatars.mds.yandex.net/i?id=25b37e98215f3d7c2091a0b985aef7d44e8bb8b0-8502968-images-thumbs&n=13'
                },
                {
                    id: 7,
                    title: 'Birria',
                    img: 'https://avatars.mds.yandex.net/i?id=ddbcbf49c50d376cf87230d301a7c032_l-10766029-images-thumbs&n=13'
                }
            ]
        },
    ]
}