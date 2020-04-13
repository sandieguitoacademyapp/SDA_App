
class Screen implements Comparable<Screen>
{
    var name;
    var tags = [];
    var v, v2;
    public Screen(String name, ArrayList<String> tags)
    {
        this.name = name;
        this.tags = new ArrayList<String>(tags);
        tags.sort(this.tags);
    }

//    compareTo(Screen other)
//    {
//        if (this.v == other.v)
//            return this.v2-other.v2;
//        return this.v-other.v;
//    }

    toString()
    {
        String ans = name + ": ";
        for (int i = 0; i < tags.size()-1; i++)
        {
            ans += tags.get(i) + ", ";
        }
        return ans + tags.get(tags.size()-1);
    }
}