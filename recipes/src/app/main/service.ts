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
                    ingredients: [
                        '1 kg potatoes (best with high-starch varieties like Russet or Yukon Gold for the creamiest texture)',
                        '½–¾ cup warm milk (substitute part with heavy cream for extra richness)',
                        '50-70 g butter (the better the butter, the more flavorful the mash!)',
                        'Salt (preferably sea salt or kosher for even seasoning)',
                        'Freshly ground black pepper (optional, but adds a nice depth)',
                        '1-2 garlic cloves (optional, for a subtle savory hint)'
                    ],
                    description: [`<strong>1. Prepping the Potatoes.</strong> Wash the potatoes thoroughly under running water to remove dirt. 
                    Peel them with a sharp knife (thin peeling reduces waste). Cut into large chunks (about 3-4 cm) for even cooking. 
                    Pro tip: Too small pieces absorb more water, leading to gluey mash. <br><br>
                    <strong>2. Boiling to Perfect Tenderness.</strong>Cover potatoes with cold salted water (1 tsp salt per liter) for even cooking. 
                    Bring to a boil over medium heat, then reduce to a simmer. Cook for 15-25 minutes (varies by type). 
                    Test with a fork - if it slides through effortlessly, they're done. Key tip: Overcooked potatoes turn gummy! <br><br>
                    <strong>3. Drying and Initial Mashing.</strong>. Drain, but do not rinse - we need the starch! <br>
                    Return potatoes to the empty pot and stir over low heat for 1-2 minutes to evaporate moisture. 
                    This step prevents a soggy mess! Add butter and mash roughly. Pro move: For silkier mash, use a ricer or sieve. <br><br>
                    <strong>4. The Creamy Transformation. </strong>Add warm milk little by little, whisking until creamy. 
                    Optional: stir in crushed garlic or a spoon of sour cream for tang. Stop mixing once smooth - overworking makes gluey potatoes. 
                    Adjust salt/pepper. Presentation: Pile high, make a well, and top with a melting butter pat.
                    Serving Suggestion: Pairs perfectly with roast chicken, steak, or braised veggies. Serve in a bowl with a gravy well.`]
                },
                {
                    id: 2,
                    title: 'Roasted Vegetables',
                    img: 'https://i.pinimg.com/originals/70/72/12/707212e390663299fbae0644a89919f6.jpg',
                    ingredients: [
                        '1 kg mixed vegetables (carrots, potatoes, broccoli, cauliflower, bell peppers, zucchini, eggplant – use seasonal picks)',
                        '3-4 tbsp olive oil (or ghee for richer flavor)',
                        '1 tbsp fresh herbs (rosemary, thyme, oregano – or 1 tsp dried)',
                        '1 tsp sea salt (plus extra to taste)',
                        '½ tsp black pepper (freshly ground)',
                        '1 tsp sweet paprika or turmeric for color (optional)',
                        '1 tbsp lemon juice or balsamic vinegar (for brightness)'
                    ],
                    description: [
                        `<strong>1. Prepping Vegetables: Cutting & Drying</strong>
                        Wash and pat veggies dry with a towel. Key: Moisture prevents crisping! Cut into even pieces (2-3 cm). 
                        Dense veggies (carrots, potatoes) slightly smaller, tender ones (zucchini, peppers) larger. 
                        Separate broccoli into florets. <br> <br>
                        <strong>2. Flavor-Packed Marinade.</strong>
                        In a large bowl, whisk olive oil, garlic, salt, pepper, and herbs. 
                        For a kick, add a pinch of chili flakes or 1 tsp honey for glaze. 
                        Add veggies and toss gently with your hands to coat evenly. <br><br>
                        <strong>3. Roasting: The Crispy Secret</strong>
                        Preheat oven to 200°C (top/bottom heat + fan if available). 
                        Spread veggies in a single layer - crowding steams them. Bake for 25-30 mins, 
                        flipping halfway. Pro tip: For extra crunch, broil for 2 final minutes. <br><br>
                        <strong>4. Serving with a Twist </strong>
                        Veggies should be tender inside with crispy edges. 
                        Drizzle with lemon juice and zest. Garnish with herbs (parsley, cilantro) 
                        or Parmesan. Perfect pairings: with hummus and pita - a light meal,
                        Over couscous and feta - a hearty lunch,
                        as a side for roasted salmon or steak.`
                    ]
                },
                {
                    id: 3,
                    title: 'Rice Pilaf',
                    img: 'https://avatars.mds.yandex.net/i?id=e6d3f4ee4847327fc4e403b1e23d853b_l-5233353-images-thumbs&n=13',
                    ingredients: [
                        '1.5 cups long-grain rice (basmati or jasmine for perfect texture)',
                        ' 2.5 cups vegetable or chicken broth (water works, but broth adds richness)',
                        '1 medium onion (finely diced)',
                        '3 tbsp butter (or olive oil for vegan)',
                        '1 bay leaf + 2-3 cloves (for fragrance)',
                        '½ tsp cumin + ½ tsp turmeric (for golden hue)',
                        ' Salt & pepper to taste'
                    ],
                    description: [
                        `<strong>1. Rice Prep: Rinsing & Soaking.</strong>
                        Rinse rice under cold water 3-4 times until water runs clear - 
                        removes excess starch. Soak in warm water for 15-20 mins, then drain. 
                        Pro tip: Soaking ensures even cooking and elongates grains. <br> <br>
                        <strong>2. Sautéing Onions & Spices.</strong>
                        Heat butter/oil in a deep pan over medium heat. 
                        Sauté onions for 4-5 mins until soft. Add garlic, cumin, turmeric, 
                        and bay leaf - cook 1 min until fragrant. Key: Don't burn garlic! <br><br>
                        <strong>3. Simmering Rice in Broth.</strong>
                        Stir in rice to coat with spices. Pour in hot broth, add salt, 
                        and bring to a boil. Reduce heat to low, cover tightly, and simmer 
                        for 15 mins. Crucial: No peeking - steam cooks the rice! <br><br>
                        <strong>4. Letting the Rice Rest.</strong>
                        Turn off heat and let sit covered for 10 more mins. 
                        This allows even absorption. Fluff with a fork before serving. 
                        Perfect texture: Light, separate grains.`
                    ]
                },
                {
                    id: 4,
                    title: 'Grilled Asparagus',
                    img: 'https://i.pinimg.com/originals/a3/a9/e8/a3a9e8541e6d86b67494231d478526d8.png',
                    ingredients: [
                        '500g fresh asparagus (thick stalks hold up best)',
                        '2 tbsp olive oil + extra for drizzling',
                        '1 tsp sea salt',
                        '½ tsp black pepper (freshly ground)',
                        '1 lemon (juice + zest)',
                        '2 tbsp grated Parmesan (or nutritional yeast)',
                        '1 tsp chili flakes (optional)'
                    ],
                    description: [
                        `<strong>1. Asparagus Prep: Trimming & Peeling.</strong>
                        Snap one spear at its natural breaking point - trim others to match. 
                        For thick stalks: Peel the lower third with a peeler. Rinse and pat dry. <br><br>
                        <strong>2. Marinade: Minimalist Magic.</strong>
                        Toss asparagus with oil, salt, and pepper. Massage gently to coat. 
                        Pro tip: Add ½ tsp garlic powder for depth. Let rest 5 mins. <br><br>
                        <string>3. Grilling for Perfect Char.</string>
                        Preheat grill/grill pan to medium-high (~200°C). Arrange spears across the grates. Cook 4-6 mins, turning once, until charred but still crisp-tender. 
                        Key: Overcooked asparagus turns mushy! <br><br>
                        <strong>4. The Grand Finale.</strong>
                        *Transfer to a platter. Drizzle with lemon juice, zest, 
                        Parmesan, and chili flakes. Add a final oil gloss. Serving inspo: 
                        on ricotta toast - chic breakfast, 
                        with grilled salmon - fancy dinner hack, in a salad with arugula and pine nuts.`
                    ]
                },
                {
                    id: 5,
                    title: 'Garlic Bread',
                    img: 'https://s.yimg.com/ny/api/res/1.2/joAryIcnh2t37mrgHXEt7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/the_daily_meal_185/e9369c7bacdd00c445ef1b53db8bfc24',
                    ingredients: [
                        '1 baguette or Italian loaf (~12 inches, slightly stale works best)',
                        '100g butter (softened, high-fat preferred)',
                        '6 large garlic cloves (finely minced or pressed)',
                        '2 tbsp fresh parsley (finely chopped)',
                        '1 tsp sea salt',
                        '½ tsp black pepper (freshly ground)',
                        '2 tbsp olive oil',
                        '50g Parmesan (grated, optional)',
                        '½ tsp red pepper flakes (optional heat)'
                    ],
                    description: [
                        `<strong>1. Bread Prep: The Cutting Technique.</strong>
                        Cut the loaf diagonally into 2-3cm slices without cutting through 
                        (creating a "fan"). 
                        For extra crunch: lightly toast at 180°C for 5 mins. <br><br>
                        <strong>2. Garlic Butter Elixir.</strong>
                        Mix softened butter, olive oil, garlic, parsley, salt, pepper, 
                        and chili flakes. Pro tip: Let rest 10 mins for flavor infusion. 
                        For fluffiness - whip with a mixer. <br><br>
                        <strong>3. Butter Application Masterclass.</strong>
                        Generously spread garlic butter between slices and over the crust. 
                        Be lavish! Top with remaining butter and Parmesan. <br><br>
                        <strong>4. Baking to Golden Perfection.</strong>
                        Wrap in foil (leaving top exposed). Bake at 200°C for 10 mins, then 
                        uncover for 5-7 mins until crisp. Finish: Broil for 1-2 mins for crunch.`
                    ]
                },
                {
                    id: 6,
                    title: ' Couscous',
                    img: 'https://avatars.mds.yandex.net/i?id=9c6c184a9b88990c6da57d17c9eed9e2_l-9461051-images-thumbs&n=13',
                    ingredients: [
                        '1.5 cups couscous (medium or coarse grain preferred)',
                        '1.75 cups vegetable/chicken broth* (or water + 1 tsp salt)',
                        '2 tbsp olive oil',
                        '1 tsp lemon zest',
                        '3 tbsp chopped mint + parsley',
                        '50g sun-dried tomatoes* (diced)',
                        '½ tsp ground cumin',
                        '¼ tsp cinnamon',
                        'Salt & pepper to taste'
                    ],
                    description: [
                        `<strong>1. Couscous Prep: The Fluff Factor.</strong>
                        *Dry-toast couscous in a pan for 2-3 mins until fragrant. 
                        Transfer to bowl, add 1 tbsp oil and toss - prevents clumping. <br><br>
                        <strong>2. Infusing the Steam.</strong>
                        Bring broth to boil with spices. Pour over couscous (ratio 1:1.25), 
                        cover tightly and let steam 10 mins. Key: No peeking - steam creates 
                        fluffiness! <br><br>
                        <strong>3. The Fluffing Technique.</strong>
                        Fluff immediately with fork. Add remaining oil, tomatoes and herbs. 
                        Fold gently from bottom. Pro move: Toss upwards with fork for lightness. <br><br>
                        <strong>4. Serving with Style.</strong>
                        Adjust seasoning with lemon juice. Serve warm topped with: toasted pine nuts,
                        feta crumbles, Pomegranate seeds.`
                    ]
                },
                {
                    id: 7,
                    title: 'Quinoa Salad',
                    img: 'https://avatars.mds.yandex.net/i?id=b987266972c5ccf145d08d57a11e8e41edca9027-6428252-images-thumbs&n=13',
                    ingredients: [
                        '1 cup dry quinoa (tri-color for visual appeal)',
                        '2 cups vegetable broth (or water + 1 tsp turmeric)',
                        '1 ripe avocado (diced)',
                        '1 cup cherry tomatoes (halved)',
                        '1 cucumber (small dice)',
                        '½ red onion (thinly sliced)',
                        '¼ cup cilantro + parsley',
                        '50g feta (crumbled, optional)',
                        '3 tbsp olive oil'
                    ],
                    description: [
                        `<strong>1. Cooking Quinoa Perfectly. </strong>
                        Dry-toast 3 mins until crackling. Simmer in broth 15 mins (1:2 ratio), 
                        rest covered 10 mins. Pro tip: Fluff with fork - grains should separate! <br><br>
                        <strong>2. Vegetable Prep. </strong>
                        Salt cucumbers (draws out moisture), pat dry. Soak onions in ice water + 
                        vinegar (mellows bite). Coat avocado with lemon juice. <br><br>
                        <strong>3. Assembly Genius.</strong>
                        In large bowl, combine cooled quinoa with veggies and herbs. 
                        Gently fold in feta. Key: Add avocado last-minute! <br><br>
                        <strong>4. Zesty Dressing.</strong>
                        Whisk dressing until emulsified. Toss salad 15 mins before 
                        serving - allows flavor absorption without sogginess.`
                    ]
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
                    ingredients: [
                        '2 heads romaine (hearts only)',
                        '1 cup croutons (homemade preferred)',
                        '0g Parmesan (shaved)',
                        '2 anchovies (or 1 tsp paste)',
                        '1 egg yolk (pasteurized)',
                        '1 garlic clove',
                        '1 tsp Dijon mustard',
                        '2 tbsp lemon juice'
                    ],
                    description: [
                        `<strong>1. Romaine Prep.</strong>
                        Tear leaves by hand (prevents browning). Soak in ice water 15 mins 
                        for extra crispness. Dry thoroughly in spinner - key step for 
                        dressing adherence. <br><br>
                        <strong>2. Traditional Dressing.</strong>
                        Mash garlic+anchovies+salt into paste. Whisk with yolk, mustard, 
                        lemon. Slowly drizzle oil while whisking to emulsify. 
                        Add Worcestershire - aim for tangy/umami balance. <br><br>
                        <strong>3. Scientific Assembly.</strong>
                        In chilled bowl, toss romaine with 2/3 dressing using hands. 
                        Add croutons + remaining dressing. Top with thick Parmesan 
                        shavings. Pro move: Add croutons last-minute for maximum crunch. <br><br>
                        <strong>4. Restaurant-Worthy Presentation.</strong>
                        Serve on chilled plate, garnish with: extra croutons framing edges, 
                        whole anchovy (for tradition), Lemon wedge on side.`
                    ]
                },
                {
                    id: 2,
                    title: 'Greek Salad',
                    img: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6690413b733033597ba72720_66911f667eb4194068587b61/scale_1200',
                    ingredients: [
                        '4 ripe tomatoes (large wedges)',
                        '1 long cucumber (thick half-moons)',
                        '1 red onion (thin rings)',
                        '1 green bell pepper (julienne)',
                        '200g feta (chunky cube)',
                        '100g Kalamata olives',
                        '5 tbsp EVOO',
                        '1 tbsp red wine vinegar',
                        '¼ tsp freshly ground pepper'
                    ],
                    description: [
                        `<strong>1. Vegetable Prep.</strong>
                        Keep cucumber skin on for crunch! Soak onions in ice water + 
                        vinegar (removes sharpness). Cut tomatoes large - prevents sogginess. <br><br>
                        <strong>2. Assembly Technique. </strong>
                        Layer ingredients in order: tomatoes → cucumbers → pepper → onion, 
                        olives/capers around edges and place feta as whole block on top (authentic presentation!). <br><br>
                        <strong>3. Perfect Dressing.</strong>
                        Whisk oil + vinegar until emulsified. Add oregano, salt, pepper. 
                        Never dress in advance! Serve dressing on the side. <br><br>
                        <strong>4. Authentic Serving.</strong>
                        Serve in glass bowl. Let guests: break feta with fork, 
                        drizzle dressing and gently toss from bottom.`
                    ]
                },
                {
                    id: 3,
                    title: 'Caprese Salad',
                    img: 'https://avatars.mds.yandex.net/i?id=a5f74a22403e30c50447d8ee346daac1_l-9844111-images-thumbs&n=13',
                    ingredients: [
                        '4 large ripe tomatoes (heirloom or beefsteak preferred)',
                        ' 250g fresh mozzarella (buffalo milk for luxury)',
                        '30 fresh basil leaves (Genovese variety)',
                        'Flaky sea salt',
                        'Freshly cracked pepper',
                        '4 tbsp premium EVOO',
                        '2 tsp aged balsamic glaze',
                        '1 tsp lemon zest'
                    ],
                    description: [
                        `<strong>1. Precision Cutting.</strong>
                        Slice tomatoes thick (1cm). Match mozzarella slices in equal diameter. 
                        Key: Use serrated knife for clean cuts. Pat cheese dry - prevents sogginess. <br><br>
                        <strong>2. Artful Arrangement.</strong>
                        Alternate on platter: tomato → mozzarella → whole basil leaf, 
                        spiral outward and top with basil leaf crown. <br><br>
                        <strong>3. Chef's Finishing.</strong>
                        Add in order: salt (1 pinch per tomato), pepper (3 cracks), 
                        EVOO (1 drop per slice), balsamic in dots and Zest only on edges. <br><br>
                        <strong>4. Creative Interpretations.</strong> 
                        Winter twist: Roasted cherry tomatoes + smoked mozzarella, 
                        deconstructed: Tomato gel, cheese foam, basil dust and fruit infusion: peach or watermelon slices.`
                    ]
                },
                {
                    id: 4,
                    title: 'Cobb Salad',
                    img: 'https://images.gastronom.ru/-AHtB-8-muI_Z0eoPW9apEmRLBVbjxJh9MAKX2WrWoc/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2JiNzdjNTVjLWY3MjQtNGFkMy05OWZkLTdiZDRkZDg0Njg1My5qcGc.webp',
                    ingredients: [
                        '200g grilled chicken breast (chilled)',
                        '100g artisanal bacon (crispy lardons)',
                        '2 eggs (poached or soft-boiled)',
                        '1 head romaine (crunchy ribs only)',
                        '1 ripe avocado (sliced)',
                        '100g cherry tomatoes (halved)',
                        '50g red onion (shaved)',
                        '75g blue cheese (hand-crumbled)',
                        '3 tbsp red wine vinegar'
                    ],
                    description: [
                        `<strong>1. Protein Prep.</strong>
                        Slice chicken across grain at 45°. Render bacon to glass-like crispness, 
                        blot. Cook eggs 6.5 mins → ice shock → peel underwater. <br><br>
                        <strong>2. Vegetable Architecture.</strong>
                        Tear romaine into 3-inch pieces. Avocado → lemon shield. 
                        Onion → cranberry vinegar bath. <br><br>
                        <strong>3. Precision Plating.</strong>
                        Arrange in geometric stripes: base: romaine. Parallel lines: 
                        chicken → bacon → egg wedges and Tomatoes → avocado → onion. 
                        Cheese precisely centered. <br><br>
                        <strong>4. Dressing Dynamics.</strong>
                        Whisk vinegar+honey+mustard → slowly emulsify oil 
                        → garlic last. Serve in slender cruet.`
                    ]
                },
                {
                    id: 5,
                    title: 'Salade Niçoise',
                    img: 'https://avatars.mds.yandex.net/i?id=1043f785abef39955d34e699fdb0a85a_l-5232391-images-thumbs&n=13',
                    ingredients: [
                        '300g baby potatoes (walnut-sized)',
                        '200g haricots verts (slim French variety)',
                        '4 eggs (soft-boiled, 6 mins)',
                        '200g oil-packed tuna* (ventresca preferred)',
                        '8 anchovy fillets (oil-cured)',
                        '50g Niçoise olives (Cailletier variety)',
                        ' 5 fresh basil leaves (chiffonade)',
                        '1 tsp Dijon mustard'
                    ],
                    description: [
                        `<strong>1. Mastering the Components.</strong>
                        Boil unpeeled potatoes in salted bay leaf water 15-18 mins until 
                        fork-tender. Cool completely before halving. Pro tip: The skin maintains 
                        structure and adds rustic texture. <br><br>
                        <strong>2. Artful Arrangement. </strong>
                        Blanch beans in rolling boil for 3 mins, then shock in ice bath. 
                        Pat dry and trim. For presentation, keep some whole. <br><br>
                        <strong>3. The Niçoise Touch.</strong>
                        Cook eggs for 7 mins for creamy yolks. Peel under cold water from 
                        the blunt end. Quarter just before assembling. <br><br>
                        <strong>4. Artful Arrangement.</strong>
                        Create distinct color zones on a platter: potato border, bean "sun rays,
                        centerpiece: tuna → eggs → tomatoes and anchovy "herringbone", scattered olives`
                    ]
                },
                {
                    id: 6,
                    title: 'Tabbouleh',
                    img: 'https://i.ytimg.com/vi/ivoJ5na27EQ/maxresdefault.jpg',
                    ingredients: [
                        '1 cup fine bulgur (grade #1, pre-soaked)',
                        '2.5 cups boiling water (for instant hydration)',
                        '3 large bunches flat-leaf parsley* (leaves only, 4 cups)',
                        '1/2 bunch fresh mint* (1 cup leaves)4 ripe tomatoes (3mm brunoise, deseeded)',
                        '6 spring onions (white/light green parts only, thin rings)',
                        '1 cucumber (fine dice, pre-salted)',
                        '1/3 cup premium EVOO* (Lebanese/Palestinian)',
                        '1 tsp ground cinnamon (secret weapon)'
                    ],
                    description: [
                        `<strong>1. The Bulgur Enlightenment.</strong>
                        Pour boiling water over bulgur, cover for 15 mins. 
                        Drain through cheesecloth, pressing gently. Fluff with fork - 
                        grains need aeration. <br><br>
                        <strong>2. Herb Surgery.</strong> Wash herbs in ice-vinegar bath. Spin dry. Hand-chop to "fine rain" consistency. Save stems for stock.
                        <br><br>
                        <strong>3. Tomato Geometry.</strong></strong>
                        Score tomatoes, blanch 15 secs. Ice shock → peel. 
                        Brunoise technique: 2mm dice after removing seed gel. <br><br>
                        <strong>4. The Grand Assembly.</strong>
                        In earthenware bowl, layer: bulgur → herbs → veggies, 
                        dust with sumac/cinnamon and no mixing! Dress last moment.`
                    ]
                },
                {
                    id: 7,
                    title: 'Waldorf Salad',
                    img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/newscms/2017_01/1185643/classic-waldorf_salad-today-1660104-tease.jpg',
                    ingredients: [
                        '3 large crisp apples (balanced tart/sweet)',
                        '2 cups celery (young stalks, angled slices)',
                        '1 cup seedless red grapes (chilled)',
                        '¾ cup walnuts (toasted, rough chopped)',
                        '⅔ cup premium mayo (homemade preferred)',
                        '2 tbsp full-fat Greek yogurt',
                        '1 tbsp fresh lemon juice',
                        '1 tsp whole-grain mustard',
                        '1 tbsp acacia honey',
                        '½ cup raisins (plumped in apple cider)'
                    ],
                    description: [
                        `<strong>1. The Apple Alchemy.</strong>
                        Peel apples, keeping ¼ skin for color. 1.5cm dice, toss with 
                        lemon-honey glaze. Marinate 7 mins - creates "oxidation shield". <br><br>
                        <strong>2. Celery Symphony.</strong>
                        Use only inner pale stalks. Peel strings with vegetable peeler. 
                        Bias-cut for maximum dressing adhesion. <br><br>
                        <strong>3. Nut Nirvana.</strong>
                        Toast nuts with salt and rosemary. Cool on marble - maintains crunch. <br><br>
                        <strong>4. The Dressing Waltz.</strong>
                        Whisk mayo/yogurt to silkiness. Temper in lemon juice. 
                        Finish with white pepper and tarragon.`
                    ]
                },
                {
                    id: 8,
                    title: 'Olivier Salad',
                    img: 'https://images.thesymbol.ru/upload/img_cache/6a2/6a29b377a6f179ded994dcb44614e4ba_ce_3000x1666x0x123_cropped_1200x628.jpg',
                    ingredients: [
                        '300g boiled chicken breast (or classic "doctors sausage")',
                        '4 eggs (9-minute boil for custardy yolks)',
                        ' 200g boiled potatoes (Red Scarlet variety)',
                        '150g young carrots (boiled with bite)',
                        '3 barrel-fermented pickles* (5mm brunoise)',
                        '1 English cucumber (deseeded, ice-bathed)',
                        '1 can premium peas (thoroughly drained)',
                        '1.5 cups mayo (homemade preferred)'
                    ],
                    description: [
                        `<strong>1. The Precision Cutting Ritual.</strong>
                        All components 5mm perfect cubes - Olivier's golden rule. 
                        Chill potatoes/carrots separately before dicing. 
                        Peel eggs under running water, keeping yolks pristine. <br><br>
                        <strong>2. The Draining Protocol.</strong>
                        Wring pickles in cheesecloth. Rinse peas 3 ice baths. 
                        Cut chicken in stages - slices → matchsticks → cubes for clean edges. <br><br>
                        <strong>3. The Layered Assembly.</strong>
                        In crystal bowl, build layers: base: potatoes + carrots, 
                        middle: protein + pickles and summit: peas + eggs (yolks reserved). 
                        No mixing yet! <br><br>
                        <strong>4. The Dressing Ceremony.</strong>
                        Fold dressing in last moment: 2/3 sauce - gentle bottom-up folds,
                        sieved yolks as golden snow and remaining dressing artfully smeared on bowl rim.`
                    ]
                },
                {
                    id: 9,
                    title: 'Shopska Salad',
                    img: 'https://cdn.tasteatlas.com/images/dishes/2a65dc1cd8324f7690c35bf13d68d746.jpg?m=facebook',
                    ingredients: [
                        '4 field cucumbers (unpeeled, 1.5cm dice)',
                        '6 ripe bell peppers (color mix)',
                        '8 heirloom tomatoes (beefsteak variety)',
                        '1 red onion (paper-thin half-moons)',
                        '1 bunch flat-leaf parsley* (leaves only)',
                        '300g sirene cheese (authentic Bulgarian feta)',
                        '2 tbsp olive oil (for grating)',
                        '5 tbsp sunflower oil',
                        '3 tbsp red wine vinegar'
                    ],
                    description: [
                        `<strong>1. Vegetable Orchestra Preparation.</strong>
                        Peppers: Char over flame until blistered → 
                        steam in container → peel → 2cm strips. Cucumbers: 
                        Salt cubes → rest → pat dry (removes bitterness). Tomatoes: 
                        Deseed → 2cm wedges → salt before assembly. <br><br>
                        <strong>2. The Layered Presentation.</strong>
                        In glass bowl build concentric rings: base: Cucumbers → peppers → tomatoes,
                        aroma layer: Onion + parsley and finale: cheese "snowdrift" 
                        (coarse grating). <br><br>
                        <strong>3. The Dressing Ritual.</strong>
                        Shake oil+vinegar in glass jar → pour along inner rim. 
                        Never toss! Layers must remain visible.`
                    ]
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
                    img: 'https://i.pinimg.com/originals/4a/4f/fd/4a4ffd40e80e3d3d1e9940040a9c16e4.jpg',
                    ingredients: [
                        '1 whole free-range chicken (3-4 lbs, preferably organic)',
                        '3 quarts cold filtered water',
                        '1 lb mixed soup bones (chicken feet for extra collagen)',
                        '2 yellow onions',
                        '3 celery ribs',
                        '4 large carrots',
                        '1 head garlic',
                        '1 bunch parsley stems',
                        '2 bay leaves',
                        '8 oz wide egg noodles'
                    ],
                    description: [
                        `<strong>1. Building the Broth (4-5 hour commitment).</strong>
                        Cold Start: Submerge chicken and bones in cold water, 
                        bring to 185°F (85°C) - never boiling! Skimming Ritual: 
                        Remove impurities every 20 minutes for first 2 hours. Aromatic Addition: At hour 3, 
                        add vegetables and spice sachet. Final Extraction: 
                        strain through cheesecloth-lined chinois. Pro Tip: The perfect broth should jiggle 
                        like champagne jelly when chilled. <br><br>
                        <strong>2. The Chicken Treatment.</strong>
                        Meat Separation: Hand-shred into thick petal-like pieces. Skin Transformation: Bake at 
                        400°F (200°C) until crackling-crisp. Bone Utilization: Return 
                        cleaned bones to broth for extra minerals. <br><br>
                        <strong>3. Noodle Science.</strong>
                        Cook in salted broth water (never plain!) to 90% doneness.Shock in iced 
                        broth to stop cooking. Toss with butter and 1 tsp chicken fat. <br><br>
                        <strong>4. The Grand Assembly.</strong>
                        Broth Base: 2 cups per serving at 160°F (71°C). Noodle Nest: 
                        3/4 cup buttered noodles. Chicken Arrangement: 5-6 artful shreds.
                        Vegetable Confetti: Fresh-cut carrots, celery, onion. Finishing Touches:
                        crispy skin crumble, parshire leaf and lemon zest snow.`
                    ]
                },
                {
                    id: 2,
                    title: 'Tomato Soup',
                    img: 'https://sun9-34.userapi.com/impg/m5x-qu7wAS7ehjYy3UAM3LvTEk7C7gkp1Ks7DQ/wF9bTD-7RjM.jpg?size=1920x1080&quality=95&sign=60ff2d9aab7252c3853723753f2f85c4&type=album',
                    ingredients: [
                        '1 cup fine bulgur (grade #1, pre-soaked)',
                        '2.5 cups boiling water (for instant hydration)',
                        '3 large bunches flat-leaf parsley (leaves only, 4 cups)',
                        '1/2 bunch fresh mint (1 cup leaves)',
                        '4 ripe tomatoes (3mm brunoise, deseeded)',
                        '6 spring onions (white/light green parts only, thin rings)',
                        '1 cucumber (fine dice, pre-salted)',
                        '1/3 cup premium EVOO (Lebanese/Palestinian)',
                        '1/4 cup fresh lemon juice (2-3 lemons)',
                        '1 tsp ground cinnamon (secret weapon)',
                        '2 tsp sumac',
                        'Sea salt (to taste)'
                    ],
                    description: [
                        `<strong>1. The Bulgur Enlightenment.</strong>
                        Pour boiling water over bulgur, cover for 15 mins. 
                        Drain through cheesecloth, pressing gently. Fluff with fork - grains 
                        need aeration. <br><br>
                        <strong>2. Herb Surgery.</strong>
                        Wash herbs in ice-vinegar bath. Spin dry. Hand-chop to 
                        "fine rain" consistency. Save stems for stock. <br><br>
                        <strong>3. Tomato Geometry.</strong>
                        Score tomatoes, blanch 15 secs. Ice shock → peel. 
                        Brunoise technique: 2mm dice after removing seed gel. <br><br>
                        <strong>4. The Grand Assembly.</strong>
                        In earthenware bowl, layer: bulgur → herbs → veggies, dust with sumac/cinnamon
                        and no mixing! Dress last moment.`
                    ]
                },
                {
                    id: 3,
                    title: 'French Onion Soup',
                    img: 'https://img-s1.onedio.com/id-5e95a408ea0fc88019d66c5e/rev-0/w-1200/h-610/f-jpg/s-f226d5bafae7f87ee73f19cb7c53ce2ec28f7d51.jpg',
                    ingredients: [
                        '1.5 kg yellow onions (3mm half-moons)',
                        '100g European-style butter',
                        '2 tbsp olive oil (burn protection)',
                        '1.5L beef bone broth (48-hour simmer)',
                        '250ml dry white wine (oaked Chardonnay)',
                        '50ml brandy (VSOP quality)',
                        '1 tsp sugar (caramelization aid)',
                        ' 2 sprigs fresh thyme',
                        '1 bay leaf (Turkish variety)',
                        '1 tbsp soy sauce (umami booster)'
                    ],
                    description: [
                        `<strong>1. The Onion Odyssey (90 Minutes). </strong>
                        Slice onions root-to-stem 5mm thick. Melt butter with oil in heavy 
                        cast-iron Dutch oven. Cook on medium-low for 45 mins until translucent. 
                        Increase heat to medium, stirring every 5 mins with wooden spatula 
                        until deep amber (45 more mins). Deglaze with wine, scraping fond 
                        (those brown bits = flavor bombs). <br><br>
                        <strong>2. The Broth Ballet (120 Minutes).</strong>
                        Add stock gradually (1 ladle at a time). Simmer uncovered for 2 hours with aromatics. 
                        Strain through chinois sieve, pressing solids. Return to clean pot, add cognac. 
                        Season with fleur de sel at the end. <br><br>
                        <strong>3. The Cheese Alchemy (30 Minutes).</strong>
                        Toast baguette slices at 160°C until golden. Mix cheeses 
                        (Gruyère for melt, Comté for aroma). Fill ovenproof bowls 3/4 
                        full, float 2 croutons, mound 1/2 cup cheese per bowl. Broil 6" 
                        from heat until bubbling with leopard spots (3-5 mins).
                        `
                    ]
                },
                {
                    id: 4,
                    title: 'Minestrone',
                    img: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_662160f82d4e14129540be22_662161ab824b084ed774ffd2/scale_1200',
                    ingredients: [
                        '200g pancetta (diced 5mm)',
                        '2 large yellow onions (1cm dice)',
                        '3 celery stalks (leaves included, 5mm slices)',
                        '2 medium carrots (brunoise 3mm)',
                        '1 zucchini (quartered lengthwise, 5mm slices)',
                        '200g savoy cabbage (1" squares)',
                        '400g canned San Marzano tomatoes (hand-crushed)',
                        '200g cooked cannellini beans (with 1/2 cup cooking liquid)',
                        '6 garlic cloves (smashed) '
                    ],
                    description: [
                        `<strong>1. Building the Flavor Foundation (45 Minutes).</strong>
                        Render pancetta in heavy-bottomed pot until crispy. Add onions, celery, carrots - sweat 
                        over medium-low until translucent. Deglaze with wine, reduce by half. 
                        Add garlic, tomatoes, herbs - cook until rustic texture forms. <br><br>
                        <strong>2. The Slow Symphony (90 Minutes).</strong>
                        Pour in stock, add parmesan rind. Simmer uncovered for 
                        1 hour (liquid should reduce by 1/3). Add zucchini, cabbage – cook until al dente.
                        Stir in beans with their liquid. <br><br>
                        <strong>3.  The Final Flourish (20 Minutes).</strong>
                        Cook pasta separately (to avoid starch overload). Add to 
                        soup just before serving. Adjust seasoning with sea salt flakes and cracked pepper.
                        `
                    ]
                },
                {
                    id: 5,
                    title: 'Borscht',
                    img: 'https://pic.rutubelist.ru/video/2024-10-16/7f/94/7f94e3d44035d0e75f038091441804a6.jpg',
                    ingredients: [
                        '500g young beets (with greens attached)',
                        '300g marrow bones (for broth base)',
                        '200g stewing beef (shank or cheek)',
                        '2 large golden onions (1cm dice)',
                        '3 carrots (julienned 3mm)',
                        '200g Savoy cabbage (1" chiffonade)',
                        '400g ripe tomatoes (concassé)',
                        '100g smoked slab bacon (1cm lardons)'
                    ],
                    description: [
                        `<strong>1. The Bone Cathedral (12 Hours).</strong>
                        Roast marrow bones at 220°C for 45 mins until mahogany. Simmer with beef shank in 5L cold water. 
                        Skim impurities every 20 mins for first 2 hours. Add 
                        charred onion (blackened skin on) for depth. 8-hour overnight simmer at 85°C 
                        (bubbles barely breaking surface). Pro Tip: The broth 
                        should coat your lips like velvet. <br><br>
                        <strong>2. The Vegetable Ballet (4 Hours Active).</strong>
                        Separate beet greens from roots (reserve greens). Roast 2/3 beets in salt crust at 180°C for 2 hours.
                        Grate remaining beets for raw freshness. Render bacon, cook onions until amber (45 mins). 
                        Layer vegetables: carrots → cabbage → tomatoes. Deglaze with kvass, add strained broth.
                        Key Moment: The soup should smell like earth after rain. <br><br>
                        <strong>3. The Grand Assembly (2 Hours).</strong>
                        Add roasted beet pulp (squeezed through sieve).Simmer potatoes separately (prevents cloudiness).
                        Combine components, adjust acidity with vinegar.Stir in raw grated beets off heat (preserves color).
                        Add chopped beet greens at last moment. Chef's Secret: The perfect borscht should 
                        stain wooden spoons permanently. <br><br>                     `
                    ]
                },
                {
                    id: 6,
                    title: 'Gazpacho',
                    img: 'https://avatars.mds.yandex.net/i?id=f474244e0087300d568e8d386c2f42da0c8bc26f-12643871-images-thumbs&n=13',
                    ingredients: [
                        '1.5 kg vine-ripened tomatoes (heirloom varieties)',
                        '2 green peppers (Italian frying type)',
                        '1 kg cucumbers (peeled, seeded)',
                        '200g stale rustic bread (crust removed)',
                        '150ml extra virgin olive oil (Picual variety)',
                        '50ml sherry vinegar (aged 30 years)',
                        '2 garlic cloves (germ removed)',
                        '1 tsp smoked paprika (Pimentón de la Vera)',
                        '20g sea salt (Maldon flakes)',
                        '100g Iberian ham (fine brunoise)'
                    ],
                    description: [
                        `<strong>1. The Tomato Transformation (12 Hours).</strong>
                        Score tomatoes, blanch 30 sec, ice shock. Remove skins, reserve juices. Salt flesh heavily, 
                        hang in cheesecloth overnight. Pro Tip: The resulting 
                        tomato water should taste like liquid rubies. <br><br>
                        <strong>2. The Bread Communion (2 Hours).</strong>
                        Soak bread in tomato water. Massage until achieving pan de gazpacho texture.
                        Strain through silk sieve, reserve pulp. <br><br>
                        <strong>3. The Cold Emulsion (1 Hour Active).</strong>
                        Blend vegetables in batches to prevent oxidation. Drizzle 
                        oil at 4°C while blending. Pass through chinois twice for silk texture. <br><br>
                        <strong>4. The Flavor Marriage (6 Hours Chilling).</strong>
                        Adjust seasoning with vinegar drop by drop. Add reserved bread pulp for body. 
                        Age at precise 6°C. 
                        `
                    ]
                },
                {
                    id: 7,
                    title: 'New England Clam Chowder',
                    img: 'https://edatop.ru/uploads/posts/2021-01/1610530414_edatop.ru_sup-chauder.jpg',
                    ingredients: [
                        '4 lbs (1.8 kg) live hard-shell clams (quahogs or cherrystones)',
                        '2 cups (500 ml) bottled clam juice (for emergency backup)',
                        '1 lb (450 g) salt pork (skin-on, 1/4" dice)',
                        '1 quart (1 L) heavy cream (40% milkfat)',
                        '2 cups (500 ml) whole milk (non-homogenized)',
                        '1/2 lb (225 g) European-style butter (82% fat)',
                        '5 lbs (2.3 kg) Yukon Gold potatoes (1/2" dice)',
                        '1/4 cup (60 ml) sherry (oloroso style)'
                    ],
                    description: [
                        `<strong>1. The 3-Day Maritime Ritual.</strong>
                        Purge clams in saltwater brine (1/4 cup sea salt per gallon) for 4 hours.
                        Steam in 3 batches with 1 cup seawater each until just opene. Reserve 3 cups (700 ml) 
                        clam liquor - decant through coffee filters. Hand-shuck clams, chop 1/3 for texture, reserve rest whole.
                        Pro Tip: The perfect clam liquor should taste like "cold Atlantic morning". <br><br>
                        <strong>2. The Pork Alchemy (4 Hours).</strong>
                        Render salt pork in cast iron Dutch oven over 2 hours. Strain and reserve 1 cup (240 ml) liquid gold fat.
                        Crisp remaining cracklings at 325°F (160°C) for garnish. Build soffritto with onions 
                        and celery root in pork fat. <br><br>
                        <strong>3. The Grand Union (6 Hours Active).</strong>
                        Par-cook potatoes in clam liquor until fork-tender. Create roux with reserved pork fat and Wondra flour.
                        Gradually incorporate dairy while whisking clockwise only. Add clams in stages – chopped first, whole last.
                        Chef’s Secret: The chowder should coat a wooden spoon like "Nantucket fog". <br><br>
                        `
                    ]
                },
                {
                    id: 8,
                    title: 'Pho',
                    img: 'https://avatars.mds.yandex.net/get-mpic/12490566/2a0000018d417e8cee54a60b68ba02320623/orig',
                    ingredients: [
                        '5 kg beef marrow bones (mix of knuckle, neck, and leg)',
                        '1.5 kg beef brisket (whole cut)',
                        '500 g beef tendon (blanched)',
                        '1 kg oxtail (trimmed)',
                        '3 large yellow onions (halved, unpeeled)',
                        '15 cm ginger root (split lengthwise)',
                        '1 whole garlic bulb (top cut off)',
                        '10 star anise pods',
                        '6 cinnamon sticks (true Saigon cinnamon)',
                        '500 g daikon radish (whole)'
                    ],
                    description: [
                        `<strong>1. The Purification (4 Hours)</strong>
                        
                        Bone Baptism: Soak bones in cold water with 
                        1/2 cup vinegar for 2 hours, changing water hourly. Initial Boil: Parboil bones for
                         45 minutes, scrubbing impurities with bamboo brush. Roasting Rite: Char aromatics 
                         over open flame until blackened (20% surface area).<br><br>
                        <strong>2. The Alchemy (18 Hour Simmer).</strong>
                        First Extraction: 6-hour rolling boil with bones only 
                        (removing foam every 20 minutes). Protein Introduction: 
                        Add brisket and tendon, reduce to gentle simmer. Spice Integration: Toast spices, 
                        wrap in muslin, add at hour 12. Final Balance: Add fish sauce and sugar in 3 stages 
                        during last 2 hours. Pro Tip: The perfect broth should coat your lips like silk and leave a lingering 
                        umami finish.<br><br>
                        <strong>3. The Assembly (1 Hour Before Serving).</strong>
                        Noodle Preparation: Soak banh pho rice noodles 30 minutes, 
                        blanch 10 secondsMeat Slicing: Chill brisket, slice against grain at 
                        2mm thickness. Broth Straining: triple strain through cheesecloth-lined chinois.
                        `
                    ]
                },
                {
                    id: 9,
                    title: 'Lentil Soup',
                    img: 'https://avatars.mds.yandex.net/i?id=ec7e69d25daffb3f660fba4eb2756b7c_l-9029853-images-thumbs&n=13',
                    ingredients: [
                        '500g Puy lentils (or 700g Umbrian Castelluccio)',
                        '200g smoked pancetta (1cm lardons)',
                        '3L dark chicken stock (with roasted bones)',
                        '400g yellow onions (1cm dice)',
                        '300g celery root (brunoise) ',
                        '250g heritage carrots (oblique cuts)',
                        '150g leeks (white part only, julienned)',
                        '100g sun-dried tomatoes (oil-packed, minced)',
                        '10 cardamom pods (toasted) '
                    ],
                    description: [
                        `<strong>1. The Broth Revelation (18 Hours).</strong>
                        Roast 2kg chicken wings with mirepoix scraps until mahogany. 
                        Deglaze with 1 bottle dry vermouth, reduce to syrup. Simmer with 5L spring water, mushroom soaking liquid.
                        Add veal foot for natural gelatin. 12-hour sous-vide at 82°C (sterilized mason jars).
                        Pro Tip: The broth should coat a spoon like liquid satin. <br><br>
                        <strong>2. The Lentil Transformation (6 Hours Active).</strong>
                        Soak lentils in mineral water + baking soda (pH 8.5). Confit pancetta in duck fat at 92°C for 4 hours.
                        Build flavor base: sweat onions 1 hour, add spices (whole) and caramelize tomato paste.
                        Incorporate lentils, hot broth in stages <br><br>
                        <strong>3. The Texture Alchemy (4 Hours).</strong>
                        Remove 1/3 soup, blend with bone marrow. Strain through linen tamis.
                        Reincorporate for velvet texture. Final seasoning adjustments: vinegar 1 tsp at a time and 
                        salt after acid balance.
                        `
                    ]
                },
                {
                    id: 10,
                    title: 'Butternut Squash Soup',
                    img: 'https://lafoy.ru/photo_b/foto-2799-0.jpg',
                    ingredients: [
                        '2.5 kg butternut squash (1 large, preferably neck portion)',
                        '500g heritage carrots (rainbow varieties for complexity)',
                        '300g celery root (peeled, 2cm dice)',
                        '150g smoked bacon lardons (applewood-smoked)',
                        '3 large shallots (thinly shaved)',
                        '6 garlic cloves (smashed, skin-on roasted)',
                        '1 fresh ginger root (50g, julienned)',
                        '1.5L chicken stock (bone broth preferred)',
                        '6 cardamom pods (lightly crushed)'
                    ],
                    description: [
                        `<strong>1. The Vegetable Initiation (6 Hours Active).</strong>
                        Salt-Roasted Squash: Coat squash halves in 5% salt solution, 
                        roast at 160°C for 3 hours until caramelized. Bacon Consommé: Render bacon, reserve fat; 
                        use scraps for stock enhancement. Root Vegetable Confit: Slowly cook 
                        carrots/celeriac in bacon fat at 90°C for 2 hour. <br><br>
                        <strong>2. The Flavor Fusion (4 Hours).</strong>
                        Spice-Infused Oil: Toast whole spices in brown butter, 
                        strain through coffee filter. Layered Sauté: Cook shallots → ginger 
                        → garlic in stages. Cider Reduction: Simmer until syrupy 
                        consistency (75% evaporation). <br><br>
                        <strong>3. The Grand Unification (3 Hours).</strong>
                        Pressure Extraction: Cook squash/broth mixture in pressure cooker 45 mins.
                        Dual-Puree Method: Blend 70% soup smooth, leave 30% chunky. Miso Integration: whisk 
                        miso with warm stock before combining.
                        `
                    ]
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
                    img: 'https://avatars.mds.yandex.net/i?id=48960a2dc73ab73fe644f127e48052583f8ccc33-10348710-images-thumbs&n=13',
                    ingredients: [
                        '450g savoiardi ladyfingers (imported from Veneto)',
                        '600ml espresso (cold brew concentrate, 24-hour extraction)',
                        '120ml Marsala wine (Florio Superiore Riserva)',
                        '900g mascarpone (3-day aged, Lombardy DOP)',
                        '12 fresh egg yolks (pasture-raised, 60g each)',
                        '300g caster sugar (vanilla-infused)',
                        '450ml heavy cream (42% fat, non-homogenized)',
                        '100g 70% dark chocolate (microplaned)'
                    ],
                    description: [
                        `<strong>1. The Coffee Enlightenment.</strong>
                        Cold brew single-origin Ethiopian Yirgacheffe beans. Steep with 
                        vanilla pod and cacao nibs. Age mixture in crystal decanter at 12°C.
                        Pro Tip: The coffee should have the viscosity of maple syrup. <br><br>
                        <strong>2. The Zabaglione Transformation .</strong>
                        Whisk yolks and sugar over 52°C bain-marie. Incorporate Marsala gradually (1 tbsp every 3 minutes).
                        Whip to ribbon stage (15 minute process). Cool in copper bowl over ice.
                        Critical Moment: The foam should hold peaks like Alpine ridges. <br><br>
                        <strong>3The Mascarpone Alchemy.</strong>
                        Whip cream to soft Chantilly stage. Fold into room-temperature mascarpone.
                        Combine with zabaglione using 73 folds. Rest mixture in stainless steel chiller.
                        Chef's Secret: The cream must whisper when falling from the spoon.
                        `
                    ]
                },
                {
                    id: 2,
                    title: 'Crème Brûlée',
                    img: 'https://i.pinimg.com/originals/b7/ea/60/b7ea60fa65ed80b2c53eab3a2097417a.jpg',
                    ingredients: [
                        '1.25L heavy cream (42% fat, non-ultrapasteurized)',
                        '12 fresh egg yolks (pasture-raised, 55-60g each)',
                        '150g superfine sugar (divided use)',
                        '1 whole vanilla bean (Madagascar Bourbon grade A)',
                        '5g sea salt flakes (Maldon)',
                        'Edible gold leaf (24k)',
                        '20g isomalt (for extra shine)',
                        '1 tsp orange zest (microplaned)'
                    ],
                    description: [
                        `<strong>1. Cream Infusion.</strong>
                        Split vanilla bean, scrape seeds, steep in cream with pod for 18 hours at 65°C (sous-vide).
                        Strain through ultra-fine chinois, press pods to extract all flavor.
                        Age infused cream at 4°C for 6 hours to develop depth. Pro Tip: The cream 
                        should coat the spoon like liquid satin. <br><br>
                        <strong>2. Custard Alchem.</strong>
                        Whisk yolks with 100g sugar until ribbon stage (8 mins).
                        Temper with cream in 7 gradual additions. Strain through nut milk bag for silkiness.
                        Rest batter for 4 hours to release air bubbles.
                        Key Moment: The mixture should read 28°Bx on refractometer. <br><br>
                        <strong>3. Precision Baking.</strong>
                        Pour into 150mm wide, 40mm deep ceramic dishes. Bake in 98°C steam oven for 85 mins until just set.
                        Cool gradually: oven → counter → fridge over 4 hours. Chef's Secret: The perfect wobble should resemble moonlight on water. <br><br>
                        <strong>4. The Sugar Dome (1 Hour Finishing).</strong>
                        Blend demerara with isomalt (3:1 ratio). Apply 2mm layer using sugar sieve.
                        Torch with blue flame (1,300°C) in circular motion. Chill exactly 12 mins before gold leaf application.
                        `
                    ]
                },
                {
                    id: 3,
                    title: 'Cheesecake',
                    img: 'https://www.allrecipes.com/thmb/tduRcp1id0nD5nh9Bi052PvAx38=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1916x819:1918x821)/AR-155222-philadelphia-classic-cheesecake-2x1-hero--3b6aaa55c17846fcb3609a6c8c78d4c7.jpg',
                    ingredients: [
                        '120g European-style butter (82-84% fat)',
                        '50g toasted hazelnut flour',
                        '15g vanilla sugar',
                        '1.4kg Philadelphia Original (brick-style, 24hr room temp)',
                        '600g crème fraîche (42% fat, cultured 48 hours)',
                        '900g mascarpone (imported Italian, 72hr refrigerator tempering)',
                        '75g acacia honey (heated to 60°C)',
                        '6 egg yolks (saved from making macarons)'
                    ],
                    description: [
                        `<strong>1.  The Crust Covenant.</strong>
                        Triple-bake technique: 12 mins initial bake (with pie weights), 
                        cool 2 hours, 8 mins second bake (unweighted), 
                        Final 4 mins with convection fan. Butter sealing: Brush melted butter (45g) while hot. <br.<br>
                        <strong>2. The Cheese Enlightenment</strong>
                        Quad-stage mixing: phase 1: Cheese + sugars (45 mins paddle attachment). Phase 2: Eggs/yolks (1 egg every 90 seconds).
                        Phase 3: Dry ingredients (sifted through chinois). Phase 4: Streamed-in cream (35°C).
                        Molecular stabilization: 2g xanthan gum (pre-hydrated) and 5g sodium citrate (for pH control).
                        <br><br>
                        <strong>3. The Baking Sutra.</strong>
                        Stepped temperature protocol: 160°C initial (25 mins). 110°C core baking (85 mins).
                        70°C stabilization (45 mins). Hydro-thermal management: double water bath system,
                        distilled water only and silicone moisture barrier. <br><br>
                        <strong>4. The Cooling Mandala:</strong>
                        Overnight gradient cooling: 1hr oven door ajar, 3hrs room temp and 12hrs refrigerated. Surface perfection:
                        alcohol spritz (Everclear) and silk-screen smoothing.
                        `
                    ]
                },
                {
                    id: 4,
                    title: 'Chocolate Fondant',
                    img: 'https://s.yimg.com/ny/api/res/1.2/L9wz4CFOHFqVY9ZMaR8m3Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media.zenfs.com/en/wfla_article_174/76e22a3f6cdd0723fe5db242f33aa53e',
                    ingredients: [
                        '300g 70% Valrhona Guanaja (or equivalent single-origin)',
                        '200g European-style butter (82% fat, cubed)',
                        '50g cocoa butter (for extra shine)',
                        '200g muscovado sugar (dark, unrefined)',
                        '6 whole eggs (organic, room temp)',
                        '30g black cocoa powder (for color depth)',
                        '5g instant coffee powder (for bitterness)'
                    ],
                    description: [
                        `<strong>1. Chocolate Perfection.</strong>
                        Melt chocolate and cocoa butter in bain-marie at precise 45°C. 
                        Cool to 28°C while stirring in figure-8 pattern. Reheat to 31°C for perfect crystallization.
                        <br><br>
                        <strong>2. Brown Butter Alchemy:</strong>
                        Cook butter until hazelnut-colored (65°C). Strain through superbag to remove milk solids.
                        <br><br>
                        <strong>3. Sugar Syrup Preparation:</strong>
                        Cook muscovado with 30ml water to 118°C. Whisk into tempered chocolate 1 tbsp at a time. <br><br>
                        <strong>4. The Grand Assembly.</strong>
                        Whisk eggs/yolks with invert sugar to ribbon stage (15 mins at 40°C). Fold in chocolate mixture with bamboo paddle.
                        
                        `
                    ]
                },
                {
                    id: 5,
                    title: 'Baklava',
                    img: 'https://avatars.mds.yandex.net/get-altay/13474366/2a000001916b064d40581e1928c5a3bedc8a/XXL_height',
                    ingredients: [
                        '500g premium pistachios (Iranian Fandoghi, hand-shelled)',
                        '300g Anatolian walnuts (sun-dried 3 weeks)',
                        '200g Lebanese pine nuts - pan-roasted in sand for absolute evenness',
                        '150g wildflower honey - crystallized variety for texture',
                        '2 tbsp mahlep (St. Lucie cherry pits) - stone-ground fresh',
                        '1 tbsp edible rose petals - Damascus variety, freeze-dried',
                        '1.5kg handmade phyllo (0.2mm thickness)',
                        '1.5kg acacia honey - harvested during full moon',
                        '1 vanilla pod (Madagascar bourbon)'
                    ],
                    description: [
                        `<strong>1. The Nut Enlightenment.</strong>
                        Pistachio purification: Blanch in 70°C water with baking soda (removes bitterness).
                        Walnut massage: Hand-rub with rosewater to remove tannins. Nut drying: 8-hour dehydration at 45°C (preserves oils).
                        Precision chopping: Mezzaluna blade on marble slab (3mm consistency). <br><br>
                        <strong>2. The Phyllo Meditation.</strong>
                        Dough stretching: Hand-pulled to cover 1m² table (see-through thin). Butter alchemy: 45-minute clarification with saffron threads. 
                        Layered architecture: base: 8 buttered sheets, nut layer 1: 300g mixtureNut layer 1: 300g mixture, Middle: 6 sheets with butter brushing,
                        nut layer 2: 400g mixture and crown: 10 sheets with diamond scoring. <br><br>
                        <strong>3. The Baking Symphony.</strong>
                        Resting phase: 2-hour chill at 8°C (prevents shrinkage). Baking ritual: 
                        160°C convection for 45 minutes, 140°C for 2 hours (slow caramelization) and 
                        final 180°C blast (ultimate crispness). Syrup infusion: 118°C sugar stage (perfect thread) and 
                        cold syrup on hot baklava (audible crackle test).`
                    ]
                },
                {
                    id: 7,
                    title: 'Mochi',
                    img: 'https://cs13.pikabu.ru/post_img/2023/05/30/6/og_og_1685439836287149146.jpg',
                    ingredients: [
                        '500g mochigome (glutinous rice)',
                        '300ml mineral water - soft mountain spring water preferred (pH 6.8-7.2)',
                        '1 tbsp food-grade limestone powder (calcium hydroxide)',
                        '200g shiratamako (glutinous rice flour)',
                        '100g katakuriko (potato starch)',
                        '50g caster sugar - dissolved into syrup at 118°C',
                        '300g anko (red bean paste)',
                        '100g yuzu curd - fresh zest only'
                    ],
                    description: [
                        `<strong>1. RICE ALCHEMY.</strong>
                        Polishing Ritual - Hand-wash rice in 7 water changes until runoff measures <50ppm starch.Lime Bath - Soak in calcium hydroxide solution (1%) at 4°C for 12 hours – creates alkaline environment for perfect chew.
                        Steam Engineering - Layer in muslin-lined bamboo steamer, 98°C for 55 minutes with pine needle aromatics.
                        Pro Tip: The rice should glow with translucent edges when properly steamed. <br><br>
                        <strong>2. THE MOCHI POUNDING CEREMONY.</strong> 
                        First Strike Phase - 2 people rhythmically pound at 72 BPM (beats per minute) for 90 minutes.
                        Fold & Turn Protocol - Every 150 strikes, a third person wets hands in ice water and folds the mass.
                        Vacuum Perfection - Transfer to chamber, remove air bubbles at -0.95 bar for 30 minutes.
                        Critical Warning: Under-pounded mochi becomes gummy, over-pounded turns crumbly. <br><br>
                        <strong>3. SHAPING & FILLING.</strong>
                        Traditional Daifuku Technique: portion 40g mochi balls at 32°C (body temperature). 
                        Flatten into 10cm circles using katakuriko-dusted marble slab. Pipe 15g filling using bismuth-coated piping tips to prevent sticking. 
                        Enclose using origami folding method - exactly 7 pleats.
                        `
                    ]
                },
                {
                    id: 8,
                    title: 'Apple Pie',
                    img: 'https://avatars.mds.yandex.net/i?id=61cf717a4f0e4805be3929144dcd0160_l-4770953-images-thumbs&n=13',
                    ingredients: [
                        '600g European-style butter (84% fat, frozen 48 hours)',
                        '750g pastry flour (00 tipo, 9% protein)',
                        '150g vodka (40% ABV, freezer-chilled)',
                        '15g apple cider vinegar (pH balance warrior)',
                        '50g granulated sugar (for browning alchemy)',
                        '12g Diamond Crystal kosher salt (volume-measured)',
                        '2kg apple blend (Precision-chopped)',
                        '200g reduced apple cider (boiled to 1/3 volume)',
                        '150g light brown sugar (molasses kiss)',
                        '75g unsalted butter (browned to hazelnut stage)'
                    ],
                    description: [
                        `<strong>1.  The Butter Architecture.</strong>
                        Cryo-shock butter cubes (-18°C) cut into 1/2" cubes. Laminating folds in 4 stages with 30-minute freezer rests.
                        Gluten development control via vodka hydration. Overnight rest in cheesecloth (not plastic). <br><br>
                        <strong>2. The Blind Baking Ritual.</strong>
                        Docking ceremony (273 precise fork holes). Chilled bean weighting (2-hour bake at 175°C).
                        Egg wash reinforcement (yolk + cider vinegar). Second bake to golden fortress (12 minutes). 
                        <br><br>
                        <strong>3. The Lattice Enlightenment.</strong>
                        Temperature-controlled rolling (13°C ambient). Mathematical lattice weaving (11 over 9 pattern).
                        Crystalline sugar dusting (demerara + vanilla sugar). Final freeze before filling (-20°C for 60 mins). 
                        Precision-cut wedges (1.8cm at widest point). Vacuum-sealed infusion with spices and cider.
                        24-hour cold extraction (4°C). Liquid gold separation (centrifuged). <br><br>
                        <strong>4. The Caramelization Gospels.</strong>
                        Brown butter clarification (65°C milk solids removal). Slow apple confit (83°C for 4 hours).
                        Tapioca slurry incorporation (viscosity control). Vanilla pod caviar (scraped under nitrogen).
                        <br><br>
                        <strong>5.  The Architectural Assembly.</strong>
                        Layer-coded apple placement (spiral Fibonacci). Liquid reduction glaze (Brix 68°).
                        Steam vent engineering (pie bird positioning). Lattice tension calibration (3mm stretch).
                        `
                    ]
                },
                {
                    id: 9,
                    title: 'Gulab Jamun',
                    img: 'https://avatars.mds.yandex.net/i?id=6fa7df8f8ef5962fceed80415110ca89291a4f5d-5664195-images-thumbs&n=13',
                    ingredients: [
                        '500g khoya/mawa (homemade, slow-reduced for 8 hours)',
                        '100g fine semolina (soaked in 50ml rose water)',
                        '50g all-purpose flour (unbleached)',
                        '1 tsp baking powder (sifted 3 times)',
                        '2 tbsp ghee (clarified, aged 6 months)',
                        '1/4 tsp saffron threads (Kashmiri, soaked overnight)',
                        '1.5kg organic sugar',
                        '1.2L spring water (pH balanced)',
                        '12 green cardamom pods (bruised)'
                    ],
                    description: [
                        `<strong>1. Khoya Alchemy.</strong>
                        Slow-reduce 10L full-fat milk in handi pot over mango wood fire. 
                        Constant wooden spoon stirring in figure-8 pattern. Final texture should hold royal seal imprint when pressed. 
                        Pro Tip: The khoya should smell like caramelized childhood memories. <br><br>
                        <strong>2. Syrup Sorcery.</strong>
                        Create three-layer syrup: base: sugar+water boiled to 220°F, middle: cardamom+vanilla infusion,
                        top: saffron+camphor essence. Age syrup in copper vessel under moonlight. <br><br>
                        <strong>3.  Dumpling Divinity.</strong>
                        Knead dough with bare hands to transfer body heat. Shape into perfect 14g spheres using gold scales.
                        Fry in pure ghee at 145°C using: first fry: 4 minutes (pale gold), rest: 15 minutes and 
                        second fry: 2 minutes (deep amber). <br><br>
                        <strong>4. The 12-Step Cooking Process.</strong>
                        Mawa Massage: Break khoya with silver forks until snow-like. Flower Bath: Incorporate semolina rosewater paste.
                        Saffron Embrace: Add golden threads with prayer. Ghee Bonding: Mix clarified butter with circular wrist motions.
                        Resting: Dough sleeps in silk-lined box for 1 hour. Sacred Geometry: Roll between marble slabs.
                        `
                    ]
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
                    img: 'https://resizer.mail.ru/p/6ec6157d-facb-5519-b0a5-40696bdc6b1f/AQAFIAPvyDYvmw6k7jR1e9dl9TnZCGZh3CV_0f4WaLHCDDt9huKk5bs1QpuJ8NfkYRnXUVzMg3n4Ub0sWBNRntaKWqk.jpg',
                    ingredients: [
                        '1.2 kg beef tenderloin (center-cut, aged 28 days)',
                        '300g veal marrow bones (for demi-glace)',
                        '400g wild mushrooms (50% chanterelles, 30% porcini, 20% morels)',
                        '100g dried cèpes (for mushroom stock)',
                        '500ml crème fraîche (42% fat)',
                        '200ml sour cream (30% fat)',
                        '100ml heavy cream (for mounting)',
                        '5 shallots (brunoise 2mm)',
                        '50ml cognac (VSOP)'
                    ],
                    description: [
                        `<strong>1. The Demi-Glace Odyssey.</strong>
                        Roast veal bones at 240°C for 1 hour until mahogany. Simmer with:
                        2kg veal knuckles, 3 charred onions and 1 bottle dry red wine. 16-hour reduction to 1/10th volume.
                        Strain through linen, chill into meat jelly. Pro Tip: The perfect demi should coat a spoon like black velvet. <br><br>
                        <strong>2. The Beef Perfection.</strong>
                        Dry-age tenderloin in cheesecloth (fridge, 24 hours). Cut into 7cm long x 1cm thick batons.
                        Dry-brine with: 2% salt by weight and 0.5% pink curing salt. Vacuum-seal with: 
                        50g rendered beef fat and 1 tsp black peppercorns. Sous-vide at 54°C for 3 hours. <br><br>
                        <strong>3. The Grand Assembly.</strong>
                        Soak dried cèpes in 500ml warm water (45 minutes). Clarify with: 200g minced lean beef,
                        1 egg white and Leek greens. Filter through coffee filter. <br><br>
                        <strong>4. The Cream Alchemy.</strong>
                        Reduce crème fraîche by 1/3. Whisk in: 100ml mushroom consommé, 
                        2 tbsp demi-glace and 1 tsp xanthan gum (for sheen). Sear beef batons in carbon steel (20 seconds per side). 
                        Flambé with cognac. Mount sauce with ice-cold butter cubes. Fold in sous-vide juices. 
                        `
                    ]
                },
                {
                    id: 2,
                    title: 'Grilled Steak with Garlic Butter',
                    img: 'https://i.pinimg.com/originals/2b/ef/49/2bef49a4b922a9b7c24f02d95e952108.jpg',
                    ingredients: [
                        '1.5 kg (3.3 lb) dry-aged ribeye (2.5" thick, bone-in',
                        '100 g (3.5 oz) Himalayan pink salt block (for dry-brining)',
                        '15 g (1 tbsp) freshly cracked Tellicherry peppercorns',
                        '250 g (1 cup + 2 tbsp) European-style butter (82% fat, softened)',
                        '12 garlic cloves (sous vide confit at 85°C for 1 hour)',
                        '30 g (1 oz) black truffle (summer variety, microplaned)',
                        '15 ml (1 tbsp) Worcestershire sauce (traditional Lea & Perrins)',
                        '5 g (1 tsp) smoked Maldon salt',
                        '200 ml (3/4 cup) beef tallow (for basting)'
                    ],
                    description: [
                        `<strong>1. The Dry-Aging Finale.</strong>
                        Place steak on salt block, refrigerate uncovered. Rotate every 6 hours for even moisture extraction. 
                        Final hour: coat with 50/50 peppercorn blend. Pro Tip: The salt block creates a perfect pellicle for crust formation. <br><br>
                        <strong>2. The Fire Ceremony.</strong>
                        Build three-zone fire with gradient from 120°C to 300°C. Cold-smoke steak over hickory at 50°C for 2 hours. 
                        Rest meat 1 hour between smoking and grilling. Stage 1 (30 min): Indirect heat at 110°C with rosemary smoke. 
                        Stage 2 (15 min): Sear over binchotan at 600°C. Stage 3 (45 min): Butter-baste in cast iron with tallow. 
                        Critical Moment: Flip exactly every 2 minutes 15 seconds for perfect crosshatching. <br><br>
                        <strong>4. The Butter Alchemy Laboratory.</strong>
                        Sous vide garlic in butter at 85°C for 1 hour. Strain, reserve infused butter. 
                        Caramelize solids in copper pan. Whip butter to 18°C consistency. Fold in truffle under nitrogen atmosphere. 
                        Age mixture in Himalayan salt cave for 12 hours.`
                    ]
                },
                {
                    id: 3,
                    title: 'Slow Cooker BBQ Pulled Pork',
                    img: 'https://i.pinimg.com/originals/04/91/b2/0491b23745e61fdea4d0dcbf8f6c0b2c.jpg',
                    ingredients: [
                        '1/2 cup yellow mustard (slather base)',
                        '4-5 lb (1.8-2.3 kg) Boston butt (bone-in, fat cap intact)',
                        '1/4 cup Worcestershire sauce (umami booster)',
                        '1/4 cup smoked paprika (Pimentón de la Vera)',
                        '3 tbsp kosher salt (Diamond Crystal)',
                        '2 tbsp black pepper (freshly cracked)',
                        '2 cups apple cider (unfiltered)',
                        '2 tbsp liquid smoke (hickory or mesquite)',
                        '1/2 cup brown sugar (dark muscovado)',
                        '1 cup ketchup (Heinz or homemade)'
                    ],
                    description: [
                        `<strong>1. Prep & Dry Brine (Evening Before).</strong>
                        Score the fat cap in 1-inch diamond pattern. Slather with mustard (acts as glue for rub).
                        Apply dry rub aggressively (1/4 cup per pound). Wrap tightly in butcher paper, refrigerate 12+ hours.
                        Pro Tip: Place on wire rack over sheet pan to allow air circulation. <br><br>
                        <strong>2. The Low & Slow Cook.</strong>
                        Sear the butt in cast iron until mahogany crust forms. Deglaze pan with bourbon (flambé optional).
                        Layer in slow cooker: aromatics (1 sliced onion, 4 garlic cloves), pork (fat cap up) and 
                        braising liquid (should come 1/3 up side). Cook on LOW (195°F/90°C) for 10-12 hours. <br><br>
                        <strong>3. Critical Checkpoints:</strong>
                        Hour 6: Baste with juices. Hour 8: Check internal temp (should be 185°F/85°C). Hour 10: Probe for tenderness (like butter). 
                        Rest pork in foil tent (save all juices!). Shred with bear claws (discard excess fat). 
                        Mix with finishing sauce (1 cup at a time). Broil portion for crispy ends (optional).
                        `
                    ]
                },
                {
                    id: 4,
                    title: 'Chicken Cordon Bleu',
                    img: 'https://avatars.mds.yandex.net/i?id=ec5b20d9c56668c2bcf234a2a46ad0db64afadd8-4184248-images-thumbs&n=13',
                    ingredients: [
                        '4 chicken supremes (air-chilled, 300g each)',
                        '200g Black Forest ham (hand-sliced 1mm)',
                        '150g Gruyère AOP (aged 18 months)',
                        '300g panko breadcrumbs (toasted with butter)',
                        '150g Wondra flour (instant blending)',
                        '500ml whole milk (non-homogenized)',
                        '1 tbsp Dijon mustard (with seeds)',
                        '2 shallots (sous-vide in butter)'
                    ],
                    description: [
                        `<strong>1. The Flavor Foundation.</strong>
                        Remove tenderloins (reserve for stock). Butterfly supremes to 5mm thickness.
                        Vacuum-seal with 3% brine (12 hours). Layer ham slices between parchment. Freeze for clean cutting.
                        Mill cheeses through drum grater. <br><br>
                        <strong>2. The Grand Construction.</strong>
                        Clarify butter for breading. Toast panko with thyme. Prepare garlic confit.
                        Pound chicken between silicone sheets to 3mm. Layer: Chicken → ham → cheese spiral.
                        Roll using sushi mat technique. Chill 2 hours (critical for structure).
                        <br><br>
                        <strong>3. The Triple Breading Ritual.</strong>
                        Dredge in flour (shake vigorously). Egg wash (2 coats with chill between).
                        Press into panko (rotate 90° each press). Freeze 1 hour before second breading.
                        Sous-vide at 62°C for 90 minutes. Deep-fry at 190°C for 90 seconds.
                        Rest on wire rack 7 minutes. <br><br>
                        <strong>4. The Sauce Symphony.</strong>
                        Cook roux to hazelnut stage. Infuse milk with bay/peppercorns.
                        Whisk in 3 stages over bain-marie. Finish with cheese/cream. Truffle béchamel (2g winter truffle).
                        Beer cheese sauce (Stout reduction). Deconstructed version (Sous-vide spheres).
                        `
                    ]
                },
                {
                    id: 5,
                    title: 'Beef Bourguignon',
                    img: 'https://i.ytimg.com/vi/BLJjzBtqVHc/maxresdefault.jpg',
                    ingredients: [
                        '2 kg beef chuck (cut into 5cm cubes, well-marbled)',
                        '500g pork belly (skin-on, cut into lardons)',
                        '1L duck fat (for confit-style searing)',
                        '2 bottles Pinot Noir (aged 5+ years, preferably Pommard)',
                        '200ml cognac (VSOP minimum)',
                        '1.5L veal demi-glace (48-hour reduction)',
                        '40 pearl onions (peeled, root intact)',
                        '100g tomato paste (sun-dried, barrel-aged)',
                        '1 bouquet garni (thyme, bay, parsley stems wrapped in leek)'
                    ],
                    description: [
                        `<strong>1. The Meat Meditation.</strong>
                        Dry-age beef cubes on rack in fridge (uncovered 12 hours). Confit-sear in duck fat at 93°C for 6 hours.
                        Reserve fond (those blackened bits = flavor plutonium). Pro Tip: The fat should whisper when meat is ready. <br><br>
                        <strong>2. The Wine Reduction Ritual.</strong>
                        Reduce wine by 3/4 with crushed garlic. Add demi-glace, simmer until coats spoon like satin. 
                        Infuse with truffle shavings (strain before using). Key Moment: The sauce should stain wooden spoons permanently. <br><br>
                        <strong>3. The Grand Assembly.</strong>
                        Layer in copper pot: beef → lardons → vegetables and alternate with wine reduction layers. 
                        Cook sous-vide at 63°C for 6 hours. Finish in wood-fired oven (220°C) for crust formation. 
                        Chef's Secret: The perfect bourguignon should make Burgundian monks weep. <br><br>
                        <strong>4. The Cathedral of Service.</strong>
                        Traditional Lyonnaise Presentation: enameled cast iron cocotte on marble slab, hand-blown Burgundy wine glasses for sauce and 
                        solid silver serving utensils. Modern Interpretations: deconstructed "Forest Floor" version with mushroom soil, 
                        bourguignon en croûte with black truffle brioche and molecular "Wine Air" encapsulation. 
                        <br><br>
                        <strong>5. The 12-Step Tasting Ritual.</strong>
                        Observe the mirror-like sauce surface. Inhale the truffle-laden aroma. Taste sauce alone from silver spoon. 
                        Experience meat texture (should dissolve like snow). Finish with gold-leafed crouton. 
                        `
                    ]
                },
                {
                    id: 6,
                    title: 'Pork Chops with Mustard and Breadcrumbs',
                    img: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/de7b3950371a1a8cb4205facacd983ca.jpg',
                    ingredients: [
                        '4 bone-in pork chops (2.5cm thick, heritage breed)',
                        '50g dry-aged pork fat (for basting)',
                        '150g panko breadcrumbs (golden grade)',
                        '80g Dijon mustard (Maille brand)',
                        '6 garlic cloves (smashed, skin-on)',
                        '100ml dry vermouth',
                        '2 tbsp Worcestershire sauce',
                        '1 tbsp fish sauce (Red Boat)',
                        '150g cultured butter (84% fat)',
                        'Fleur de sel (for finishing)',
                        '50ml heavy cream (not ultrapasteurized)'
                    ],
                    description: [
                        `<strong>1. The Dry-Age Prep.</strong>
                        Pat chops dry, place on rack over baking sheet. Refrigerate uncovered (3°C) with activated charcoal filter. 
                        Rotate every 6 hours for perfect pellicle formation. Pro Tip: The surface should feel tacky like vintage leather. <br><br>
                        <strong>2. The Crust Construction.</strong>
                        Create mustard mortar: blend Dijon, whole grain mustard, thyme, lemon zest. 
                        Apply 1mm layer on all surfaces (including bone). Press panko into mustard at 45° angle for maximum adhesion.
                        Rest crusted chops on wire rack at room temp. Key Moment: The crust should look like medieval armor. <br><br>
                        <strong>3. The Cooking Symphony.</strong>
                        Preheat cast iron to 135°C (not a degree more!). Cook chops fat-side down for 15 minutes to render.
                        Cook chops fat-side down for 15 minutes to render. Remove chops, increase heat to 230°C.
                        Add pork fat, garlic, rosemary - baste chops 3 minutes. Deglaze with vermouth, reduce to syrup.
                        <br><br>
                        <strong>4. The Butter Baptism.</strong>
                        Off heat, swirl in butter one cube at a time. Add cream, Worcestershire, fish sauce.
                        Final lemon juice adjustment. 48-hour dry age concentrates flavor. Panko at 45° creates shattering texture. 
                        Pre-rendered fat prevents curling. Reverse sear ensures even doneness. 230°C finish creates Maillard crust. Limestone slab maintains 58°C serving temp. 
                        `
                    ]
                },
                {
                    id: 7,
                    title: 'Lomo Saltado',
                    img: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_669c3eebc65ec91dbff581d8_66cd7f5e5f5ed25429e9483c/scale_1200',
                    ingredients: [
                        '800g beef tenderloin (preferably Angus or Wagyu, cut into 1.5 cm thick strips against the grain)',
                        '3 tbsp soy sauce (dark for color, light for saltiness)',
                        '2 tbsp oyster sauce (for umami depth)',
                        '1 tbsp aji panca paste (Peruvian red chili, mild heat)',
                        '1 tbsp aji amarillo paste (yellow chili, fruity kick)',
                        '1/4 tsp MSG (optional, but traditional in Chifa cuisine)',
                        '1-inch ginger (julienned, for brightness)',
                        '2 yellow chili peppers (aji amarillo, julienned)',
                        '500g Yukon Gold potatoes (peeled, thick fries)',
                        '1/4 cup red wine vinegar (Peruvian preferred)'
                    ],
                    description: [
                        `<strong>1. THE MEAT MARINADE.</strong>
                        Dry the beef strips (pat with paper towels - moisture is the enemy of searing).
                        Massage the marinade (soy sauce, oyster sauce, aji pastes, cumin, pepper, MSG).
                        Vacuum-seal & refrigerate (if possible, *sous-vide at 54°C for 1 hour* for ultimate tenderness).
                        Why? The enzymes in aji paste break down proteins, while soy sauce penetrates deep.
                        <br><br>
                        <strong>2. THE PERFECT FRITES (DOUBLE-FRY METHOD).</strong>
                        First fry at 130°C for 8 mins (soft inside, pale outside). Drain & cool (this step is crucial for crispiness).
                        Second fry at 190°C for 3 mins (golden, shatteringly crisp). Toss in smoked paprika & salt while still piping hot.
                        Pro Tip: Use duck fat instead of oil for next-level flavor. <br><br>
                        <strong>3. THE WOK PERFORMANCE (HIGH HEAT, FAST HANDS).</strong>
                        Sear the beef in batches (carbon steel wok, jet-engine flame). Remove meat, then blister onions, peppers, and tomatoes (30 seconds max).
                        Deglaze with pisco (flambé optional but dramatic). Add sauce components, reduce until glossy.
                        Return beef, toss with cilantro and scallions. Critical Moment: The wok should be so hot that the sauce immediately coats everything. <br><br>
                        <strong>4. THE ART OF PLATING.</strong>
                        Pile fries on one side (so they stay crisp). Spoon beef & veggies dramatically over them.
                        Drizzle remaining wok sauce (like an artist finishing a canvas). Top with fried egg (if using) and lime wedge.
                        Potato foam instead of fries. Beef tartare version (with seared edges). Deconstructed with tomato gelée.
                        `
                    ]
                },
                {
                    id: 8,
                    title: 'Meatballs in Tomato Sauce',
                    img: 'https://avatars.mds.yandex.net/i?id=d44397af622ba1a7f7e319bc8b7881e076f36aad-12538455-images-thumbs&n=13',
                    ingredients: [
                        '1 kg ground beef (80/20 chuck blend)',
                        '500 g ground pork (shoulder fat cap included)',
                        '500 g ground veal (for silkiness)',
                        '300 g stale ciabatta (crust removed, 2-day-old)',
                        '400 ml whole milk (warmed to 40°C)',
                        '3 eggs (pasture-raised, room temp)',
                        '2 onions (sweated in butter until caramelized)',
                        '1/2 bunch parsley (leaves only, chiffonade)',
                        '4 kg San Marzano tomatoes (peeled, seeded)',
                        '500 ml dry red wine (Barolo or Chianti)',
                        '10 basil stems (reserve leaves for garnish)'
                    ],
                    description: [
                        `<strong>1. The Foundation Ritual.</strong>
                        Blanch tomatoes 30 sec → ice bath. Remove skins, halve horizontally.
                        Seed over fine sieve (reserve juices). Slow-roast at 120°C with olive oil, garlic confit.
                        Tear bread into 3cm chunks, soak in warm milk. Hand-mix meats with panade (40°C mixture).
                        Incorporate other ingredients clockwise.
                        Test seasoning with mini patty fry test. <br><br>
                        <strong>2. The Chilling Crucible.</strong>
                        Form 80g balls using ice-cream scoop. Arrange on parchment, refrigerate uncovered.
                        Sear meatballs in lard batches (never crowd). Deglaze pan with wine, reduce to syrup.
                        Build sauce: tomato paste → wine reduction → roasted tomatoes. <br><br>
                        <strong>3. The Low-Temp Communion.</strong>
                        Submerge meatballs in 85°C sauce. Cook sous-vide style in Dutch oven.
                        Baste every 30 minutes with fat cap. Remove meatballs, reduce sauce by 1/3. Mount sauce with cold butter cubes.
                        Add reserved basil chiffonade. <br><br>
                        <strong>4. The Sacred Serving Ritual. </strong>
                        Traditional Nonna Style: Hand-thrown terracotta bowls (preheated). 3 meatballs per serving (pyramid formation). 
                        Sauce moat around perimeter. Crusty bread scepter on side. Modern Chef's Interpretation: Deconstructed "meatball essence" consommé.
                        Sous-vide egg yolk garnish. Crispy bread foam. `
                    ]
                },
                {
                    id: 9,
                    title: 'Rack of Lamb with Herbs',
                    img: 'https://avatars.mds.yandex.net/i?id=bb28a79d822ae9ded346c74c109b9ac6_l-4817585-images-thumbs&n=13',
                    ingredients: [
                        '1 full 8-bone Frenched rack (3.5-4 lbs/1.6-1.8 kg) from grass-fed Dorset lamb',
                        '2L cold brine (5% salinity with rosemary stems, black cardamom, juniper berries)',
                        '1L duck fat (for 24-hour confit)',
                        '100g Dijon mustard (whole grain, aged 6 months)',
                        '200g fresh herb paste (equal parts: rosemary, thyme, marjoram, tarragon)',
                        '150g crust mixture (panko + pistachio meal + dehydrated olive powder)',
                        '12 garlic cloves (sous-vide confit in lamb fat)',
                        '2 whole black truffles (shaved, some reserved for sauce)',
                        '2kg heirloom carrots (rainbow varieties, tops reserved)',
                        '500g morel mushrooms (fresh, brushed clean)'
                    ],
                    description: [
                        `<strong>1. The Brining Ritual.</strong>
                        Dry-age the rack uncovered in fridge for 12 hours. Submerge in aromatic brine at 2°C for exactly 24 hours.
                        Rinse, pat dry, vacuum-seal with duck fat. Sous-vide at 62°C for 8 hours, chill in ice bath.
                        Why? Breaks down collagen while preserving moisture. Remove fat cap carefully (reserve for rendering).
                        Inject herb oil (rosemary + garlic infused) between ribs. Apply mustard layer with pastry brush.
                        Press herb crust mixture using cheesecloth binding. Rest uncovered in fridge to set crust. 
                        Chef's Secret: The cold air dries the crust for perfect adhesion. <br><br>
                        <strong>2. The Fire Ceremony.</strong>
                        Preheat cast iron skillet to 260°C. Render reserved fat cap for cooking oil. 
                        90 seconds per side to create mahogany crust. Mount on vertical rack over root vegetables. 
                        Roast at 180°C with steam injection (20 mins). Final blast at 250°C for caramelization (3 mins). 
                        Tent with herb-infused parchment. Place on warm salt block for 15 mins. <br><br>
                        <strong>3. The Molecular Gastronomy Touches.</strong>
                        Reduction Base: Barolo + black truffle scrapings. Emulsion: Lamb jus + cocoa butter.
                        Finishing: Frozen bone marrow shavings. Carrots: Glazed in lamb fat caramel.
                        Onions: Confit in vanilla-infused oil. orels: Stuffed with foie gras mousse.
                        Sauce geodes (set with agar). Soil layer of crushed hazelnuts.
                        Vertical lamb presentation on custom stand. <br><br>
                        <strong>4. The 12-Point Perfection Checklist.</strong>
                        Internal temp: 54°C after rest. Crust adhesion: No more than 5% loss. Frenchness: 3" clean bone exposure. Herb distribution: 2mm uniform layer.
                        Resting juice: 30ml collected per rack. Mouthfeel: Melts at 37°C body temp. 
                        `
                    ]
                },
                {
                    id: 10,
                    title: 'Chateaubriand',
                    img: 'https://avatars.mds.yandex.net/get-altay/965007/2a000001628845c0b9251881fba7370eed7c/XXL',
                    ingredients: [
                        '1.2 kg center-cut beef tenderloin (8-10cm diameter, trimmed)',
                        '200g cold unsalted butter (82% fat, European-style)',
                        '6 shallots',
                        '10 black peppercorns (freshly cracked)',
                        '150ml cognac (VSOP minimum)',
                        '100ml veal stock (bone marrow enriched)',
                        '300ml demi-glace (48-hour reduction)',
                        '400g wild mushrooms (chanterelle & morel)',
                        '12 baby carrots (rainbow, glazed)'
                    ],
                    description: [
                        `<strong>1. The Meat Enlightenment.</strong>
                        Dry-age tenderloin uncovered on rack at 1°C. Rotate every 6 hours for even pellicle formation. 
                        Trim to perfect cylinder (save trimmings for tartare). Science Note: Enzymatic breakdown increases tenderness by 38%.
                        Roast veal bones at 220°C until mahogany. Simmer with mirepoix and tomato paste for 16 hours. 
                        Strain through linen, reduce to syrupy consistency. Chef's Secret: 1 liter reduces to 50ml of liquid gold. <br><br>
                        <strong>2. The Grand Execution.</strong>
                        Salt steak 1 hour before cooking (1% by weight). Preheat cast iron to 260°C (infrared thermometer check).
                        Sear 90 seconds per side in clarified butter. Baste continuously with foaming butter. 
                        Add aromatics at 120°C butter temperature. Probe monitor to 54°C core temperature. 
                        <br><br>
                        <strong>3.The Sauce Alchemy.</strong>
                        Deglaze with cognac (flambé optional). Incorporate demi-glace and veal stock.
                        Strain through superbag, mount with butter. Sauce mirror (85°C precise temperature). Carved steak (2cm angled slices).
                        Duxelles-stuffed morels. Carrot spirals (sous-vide glazed). Crispy shallot rings. Microgreens (foraged).
                        Edible gold leaf (22-karat). Truffle shavings (winter black variety).
                        <br><br>
                        <strong>4. The Temperature Ballet.</strong>
                        Surface: 160°C (Maillard crust). 1cm depth: 68°C (medium-rare). Core: 54°C (perfect rose).
                        Viscosity: 150 centipoise. Serving temp: 72°C. Emulsion stability: 22 minutes. 

                        `
                    ]
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
                    img: 'https://avatars.mds.yandex.net/i?id=f20a1a163c616c65bb1a8cb20a90b9b85216fa8ee49cda98-13235031-images-thumbs&n=13',
                    ingredients: [
                        '1.2 kg wild Alaskan king salmon (center-cut, skin-on)',
                        '50g kosher salt (for dry brine)',
                        '30g raw sugar (for caramelization)',
                        'Mix salt and sugar, coat fish evenly',
                        'Place on rack over sheet pan',
                        'Refrigerate uncovered (skin side up)',
                        'Rinse cure, pat extremely dry',
                        'Fan optional for pellicle formation'
                    ],
                    description: [
                        `<strong>1. The Grill Setup.</strong>
                        4 Prepare two-zone fire (charcoal preferred). Direct side: 260°C (for searing).
                        Indirect side: 120°C (for finishing).Soak cedar planks (for smoke infusion).,
                        Prepare herb brush (thyme/rosemary tied together). Score skin at 1cm intervals (prevents curling).
                        Oil fish minimally (avocado oil spray). Sear skin-side down over direct heat (90 seconds).
                        Move to indirect heat, baste with: Brown butter (50g), Soy glaze (1 tbsp) and Lemon zest (from 1 fruit).
                        Cook until 46°C internal (probe thermometer). <br><br>
                        <strong>2. The Salsa Choreography.</strong>
                        Cut avocados last moment with ceramic knife. Toss with jicama/cucumber. 
                        Add dressing table-side for freshness. Garnish with: Edible flowers (nasturtium), Furikake seasoning and Micro cilantro.
                        <br><br>
                        <strong>3. Temperature Contrast:</strong>
                        Salmon at 54°C when served. Salsa components at 12°C. Plates warmed to 60°C.
                        Crispy skin (sheer glass texture). Buttery fish (medium-rare). Creamy avocado. 
                        Crunchy jicama. Chewy mango. Base: Yuzu-miso emulsion. Middle: Salmon drippings. Top: Herb oil dots. <br><br>
                        <strong>4. The Science Behind Perfection.</strong>
                        Dry brine enables deeper browning. Sugar cure promotes caramelization. Skin scoring prevents uneven cooking.
                        Avocado oil binds water/fat in salsa. Miso acts as natural emulsifier. Yuzu provides stable acidity. Two-zone cooking preserves omega-3s.
                        46°C finish = collagen transformation. Warm plates prevent fat solidification.

                        `
                    ]
                },
                {
                    id: 2,
                    title: 'Shrimp Scampi',
                    img: 'https://s.yimg.com/ny/api/res/1.2/Lu245nMrWwU2hR3rWMecxQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzQ-/https://media.zenfs.com/en/foodie_784/7c4404a846e467b58e683f7735c34530',
                    ingredients: [
                        '1.5 kg colossal shrimp (U12-15 count, shell-on)',
                        '500g shrimp shells (for bisque-grade stock)',
                        '200g cured bottarga (for umami dust)',
                        '300ml dry vermouth (Dolin Blanc)',
                        '150ml vin santo (aged 10 years)',
                        '500ml shellfish stock (48-hour reduction)',
                        '12 garlic cloves (sous-vide confit)',
                        '400g European butter (82% fat, cubed)',
                        '200g sourdough breadcrumbs (cooked in shrimp fat)',
                        '1 bunch parsley (leaves only, flash-fried)'
                    ],
                    description: [
                        `<strong>1. The Shellfish Epiphany.</strong>
                        Dry-age shrimp uncovered on rack at 2°C for 24 hours. Roast shells with brandy, reduce to glace de crustacés.
                        Prepare garlic confit at 85°C for 6 hours in olive oil. Clarify stock with raft of egg whites and shrimp mousse.
                        Infuse with saffron and lemon verbena. Reduce to nappé consistency (coats spoon).
                        Sauté shallots in shrimp head oil until translucent. Deglaze with vermouth-vin santo mixture, reduce by ¾.
                        Whisk in butter cubes one at a time at precise 65°C. Add shrimp, cook just until opalescent (2 mins max). 
                        <br><br>
                        <strong>2. The Molecular Enhancements.</strong>
                        Liquid nitrogen-frozen garlic chips. Spherified lemon juice caviar.
                        Dehydrated sea foam powder. Hot-cold contrast (chilled consommé gelée). Vertical presentation (shrimp tower).
                        Aromatic smoke (burning rosemary sprigs). <br><br>
                        <strong>3. The 15-Point Perfection Checklist.</strong>
                        Shrimp arranged in Fibonacci spiral. Sauce viscosity measured with viscometer. 
                        Plate temperature maintained at 58°C. Butter emulsion tested with laser refractometer.
                        Grand Cru Chablis (minerality cuts richness). Aged Fino Sherry (nutty complement).
                        <br><br>
                        <strong>4. The Scampi Manifesto.</strong>
                        Scampi butter for brioche toast. Shrimp head oil for pasta.
                        Crispy antennae as cocktail garnish. True scampi demands three days 
                        of devotion - anything less is mere shrimp sauté. The butter must whisper 
                        secrets of Normandy pastures, the shrimp should recall Mediterranean 
                        tides, and the garlic ought to sing Provençal ballads. 
                        `
                    ]
                },
                {
                    id: 3,
                    title: 'Fish Tacos',
                    img: 'https://i.pinimg.com/originals/37/15/fe/3715fe448ab9b6750d1fe72d124853ce.jpg',
                    ingredients: [
                        '1.5 kg fresh wild-caught cod (skinless, center-cut)',
                        '500ml buttermilk brine (with 2 tbsp kosher salt, 1 tbsp sugar)',
                        '200g rice flour (for ultimate crispness)',
                        '500ml ice-cold lager beer (Mexican Victoria preferred)',
                        '2 liters peanut oil (for frying at 190°C)',
                        '1 small purple cabbage (shaved paper-thin)',
                        '200ml crema fresca',
                        '1 tbsp ancho chili powder',
                        '24 fresh corn tortillas (double-stacked, 4" diameter)'
                    ],
                    description: [
                        `<strong>1. Fish Preparation.</strong>
                        Cut cod into 5cm x 2cm fingers (perfect taco size). Brine in buttermilk mixture with: 
                        1 tbsp cumin seeds, 2 crushed garlic cloves and 1 tsp orange zest. Chill exactly 90 minutes - any longer makes texture mushy.
                        Pro Tip: The brine should smell like the ocean at sunrise. Whisk dry ingredients (flours + baking powder + 1 tbsp smoked paprika).
                        Add beer gradually while whisking (batter should coat spoon thickly). Rest batter precisely 30 minutes (gluten development window).
                        Test with single fish piece - should puff dramatically. Chef's Secret: The perfect batter sounds like rain when frying.
                        <br><br>
                        <strong>2. The Frying Ritual.</strong>
                        Heat oil to 190°C (use candy thermometer). Pat fish completely dry (wet spots cause splattering).
                        Dredge in rice flour → dip in batter → fry 3 minutes. Drain on copper rack (not paper towels). 
                        Critical Moment: Oil must stay between 185-195°C for perfect crunch. Massage cabbage with salt (15 minutes).
                        Rinse, spin dry thoroughly. Toss with: Jicama matchsticks, Carrot spirals and Chili-lime crema. 
                        Add cilantro just before serving. Texture Note: The slaw should retain architecture when piled. <br><br>
                        <strong>3. The Grand Assembly.</strong>
                        Warm tortillas on comal (30 sec per side). Layer:Double tortilla (structural integrity), Slaw nest (acts as moisture barrier),
                        2 fish pieces (crossed like swords), Salsa drizzle (artistic zigzag) and Queso fresco snowfall. Finish with: 
                        Lime squeeze, Radish rose and Micro cilantro. Presentation Perfection: Each taco should stand upright proudly. <br><br>
                        <strong>4. The 12-Point Perfection Checklist.</strong>
                        Fish Texture: Flakes under slight pressure but maintains shape. Batter: Lacy, golden, audible crunch.
                        Slaw: Retains bright purple hue (no wilting). Tortillas: Pliable but doesn't tear. 
                        Heat Gradient: Mild slaw → hot fish → cool salsa. Structural Integrity: No soggy bottoms. 
                        Flavor Balance: Sweet/sour/heat in each bite. Aroma: Should evoke beachside taquería. 
                        Temperature Contrast: Hot fish vs chilled elements. Visual Appeal: Color spectrum from purple to golden. 
                        Eating Experience: Requires exactly 3 napkins. 
                        Aftertaste: Makes you immediately want another. Double tortillas prevent breakage`
                    ]
                },
                {
                    id: 4,
                    title: 'Seafood Paella',
                    img: 'https://i.pinimg.com/originals/87/b7/f6/87b7f6f17879a1a709ec828c620b52fc.jpg',
                    ingredients: [
                        '600g Bomba rice (or Calasparra) – The only acceptable varieties for authentic texture',
                        '2L fish fumet (made from rockfish, prawn shells, and saffron) – Homemade or GTFO',
                        '1 cup dry white wine (Spanish Albariño preferred)',
                        '12 large prawns (head-on, size U/8) – For maximum flavor extraction',
                        '500g mussels (Bouchot or Galician) – Purged in saltwater for 24 hours',
                        '400g clams (Manila or Venus) – Soaked with cornmeal to remove grit',
                        '200g monkfish (cut into 2" medallions) – The "poor man’s lobster"',
                        '1 tbsp smoked paprika (Pimentón de la Vera – Dulce)',
                        '2 bay leaves (Turkish, not Californian)',
                        '1 lemon (cut into supremes)',
                        'Paella pan (38cm, carbon steel)'
                    ],
                    description: [
                        `<strong>1. The Fumet.</strong>
                        Roast prawn shells, fish bones, and saffron in oven (200°C, 20 mins). Simmer with white wine, leeks, and fennel for 1 hour.
                        Strain through cheesecloth, reduce by 25%. Cook onions in olive oil on low heat until translucent (30 mins).
                        Add grated tomato, cook until brick-red paste forms.
                        Stir in garlic paste and paprika (off heat to avoid burning).
                        Toast rice in pan until pearly (3 mins). <br><br>
                        <strong>2. The Rice Dance.</strong>
                        Deglaze with white wine, reduce completely. Add hot fumet (ratio 1:3 rice to liquid).
                        Distribute saffron infusion in spiral pattern. Arrange monkfish and squid first (they need longest).
                        Add mussels and clams (hinge-side down). Finish with prawns (press into rice slightly).
                        NO STIRRING after this point – soccarat formation begins. <br><br>
                        <strong>3. The Resting & Finishing.</strong>
                        Cover with cotton cloth (not lid!) for 5 mins. Increase heat at end for final soccarat (listen for crackle).
                        Garnish with lemon, parsley, and olive oil drizzle. Bomba rice absorbs 3x liquid without turning mushy.
                        Soccarat (crispy bottom) requires exact heat control. Seafood timing ensures everything finishes together. <br><br>
                        <strong>4. The Resting & Finishing.</strong>
                        Umami (from fumet and sofrito). Smoke (rosemary and paprika).
                        Briny sweetness (fresh seafood). Rabbit, chicken, and snails. Flat green beans. 
                        No seafood (!). Extra shellfish. Sometimes includes langoustines. 
                        `
                    ]
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