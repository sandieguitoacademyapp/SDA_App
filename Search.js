class Screen
{
    name;
    tags = [];
    v, v2;
    constructor(name,tags)
    {
        this.name = name;
        this.tags = tags;
        this.tags.sort();
    }

    compareTo(other)
    {
        if (this.v == other.v)
            return this.v2-other.v2;
        return this.v-other.v;
    }
    static compareSort(a,b)
    {
        if (a.v == b.v)
            return a.v2-b.v2;
        return a.v-b.v;
    }

    toString()
    {
        var ans = name + ": ";
        for (int i = 0; i < tags.size()-1; i++)
        {
            ans += tags.get(i) + ", ";
        }
        return ans + tags.get(tags.size()-1);
    }
}

class search {

    //main
    var tags = [];
    var tagSet = [];
    var screens = [];
    public static void main(String[]args)
    {
        searchBounds = 3;
        searchResultLength = 3;
        var cTags = [];

        cTags = [];
        cTags.add("ispe");
        cTags.add("document");
        cTags.add("form");
        screens.add(new Screen("ISPE Document", cTags));

        cTags.clear();
        cTags.add("schedule");
        screens.add(new Screen("Bell Schedule", cTags));

        cTags.clear();
        cTags.add("tennis");
        cTags.add("schedule");
        screens.add(new Screen("Tennis schedule", cTags));

        cTags.clear();
        cTags.add("basketball");
        cTags.add("schedule");
        screens.add(new Screen("Basketball schedule", cTags));

        cTags.clear();
        cTags.add("basketball");
        cTags.add("coach");
        screens.add(new Screen("Basketball Coach", cTags));

        cTags.clear();
        cTags.add("tennis");
        cTags.add("coach");
        screens.add(new Screen("Tennis Coach", cTags));

        cTags.clear();
        cTags.add("basketball");
        cTags.add("signup");
        cTags.add("admissions");
        screens.add(new Screen("Basketball Signups", cTags));

        cTags.clear();
        cTags.add("admissions");
        screens.add(new Screen("Admissions", cTags));

        cTags.clear();
        cTags.add("admissions");
        cTags.add("deadline");
        screens.add(new Screen("Admissions Deadline", cTags));

        for (int i = 0; i < screens.length; i++)
        {
            for (int j = 0; j < screens[i].tags.length; j++)
            {
                if (!tagSet.contains(screens[i].tags[j]))
                {
                    tagSet.push(screens[i].tags[j]);
                    tags.push(screens[i].tags[j]);
                }
            }
        }

//        String s = (new Scanner(System.in)).nextLine();
//        var results = search(s);
//        for (int i = 0; i < results.size(); i++)
//        {
//            System.out.println(results.get(i));
//        }
//        System.out.println();
    }

    //sed
    var mem;
    var s1, s2;
    static sed(String s1, String s2)
    {
        search.s1 = s1.toLowerCase();
        search.s2 = s2.toLowerCase();
        mem = new int[s1.length()][s2.length()];
        for (int i = 0; i < s1.length(); i++)
            mem[i].fill(-1);
        return rsed(s1.length()-1, s2.length()-1);
    }
    static rsed(int y, int x)
    {
        if (y == -1)
            return x+1;
        if (x == -1)
            return y+1;
        if (mem[y][x] != -1)
            return mem[y][x];
        int a1;
        if (s1.charAt(y) == s2.charAt(x))
            a1 = rsed(y-1, x-1);
        else
            a1 = rsed(y-1, x-1)+1;
        mem[y][x] = Math.min(Math.min(rsed(y-1, x)+1, a1), rsed(y, x-1)+1);
        return mem[y][x];
    }

    //search
    var searchBounds, searchResultLength;
    static search(String s)
    {
        var sTags = [];
        var arr = s.split(" ");
        for (int i = 0; i < arr.length; i++)
        {
            for (String t: tags)
            {
                if (sed(arr[i], t) <= searchBounds)
                    sTags.push(t);
            }
        }
        sTags.sort(Screen.compareSort);
        var ans = [];
        for (Screen sc: screens)
        {
            var v = 0;
            for (int i = 0, j = 0; i < sTags.size() && j < sc.tags.size();)
            {
                var dif = sTags.get(i).compareTo(sc.tags.get(j));
//                System.out.println(sTags.get(i) + " " + sc.tags.get(j) + " " + dif);
                if (dif == 0)
                {
                    v++;
                    i++;
                    j++;
                }
                else if (dif < 0)
                    i++;
                else
                    j++;
            }
            if (v > 0)
            {
                sc.v = -v;
                sc.v2 = Math.abs(sc.name.length()-s.length());
                ans.push(sc);
            }
        }
        ans.sort(Screen.compareSort);
        return ans.slice(0, Math.min(searchResultLength, ans.size()));
    }
}