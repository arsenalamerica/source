import Link from 'next/link';
export interface HomeProps {
  params: { domain: string };
}

export default function Home({ params }: HomeProps) {
  return (
    <div>
      <h1>Welcome to {params.domain}!</h1>
      <h2>Cool path</h2>
      <Link
        href={{
          pathname: '/',
          query: params,
        }}
      >
        Home
      </Link>

      <div className="w-full">
        <header className="bg-primary text-primary-foreground py-4 px-6">
          <h1 className="text-2xl font-bold">Premier League</h1>
        </header>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-4 py-3 text-right">GP</th>
                <th className="px-4 py-3 text-right">W</th>
                <th className="px-4 py-3 text-right">D</th>
                <th className="px-4 py-3 text-right">L</th>
                <th className="px-4 py-3 text-right">GF</th>
                <th className="px-4 py-3 text-right">GA</th>
                <th className="px-4 py-3 text-right">Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-background">
                <td className="px-4 py-3 font-medium">Manchester City</td>
                <td className="px-4 py-3 text-right">38</td>
                <td className="px-4 py-3 text-right">29</td>
                <td className="px-4 py-3 text-right">6</td>
                <td className="px-4 py-3 text-right">3</td>
                <td className="px-4 py-3 text-right">99</td>
                <td className="px-4 py-3 text-right">26</td>
                <td className="px-4 py-3 text-right">93</td>
              </tr>
              <tr className="border-b bg-muted/10">
                <td className="px-4 py-3 font-medium">Arsenal</td>
                <td className="px-4 py-3 text-right">38</td>
                <td className="px-4 py-3 text-right">28</td>
                <td className="px-4 py-3 text-right">6</td>
                <td className="px-4 py-3 text-right">4</td>
                <td className="px-4 py-3 text-right">93</td>
                <td className="px-4 py-3 text-right">39</td>
                <td className="px-4 py-3 text-right">90</td>
              </tr>
              <tr className="border-b bg-background">
                <td className="px-4 py-3 font-medium">Manchester United</td>
                <td className="px-4 py-3 text-right">38</td>
                <td className="px-4 py-3 text-right">22</td>
                <td className="px-4 py-3 text-right">9</td>
                <td className="px-4 py-3 text-right">7</td>
                <td className="px-4 py-3 text-right">58</td>
                <td className="px-4 py-3 text-right">43</td>
                <td className="px-4 py-3 text-right">75</td>
              </tr>
              <tr className="border-b bg-muted/10">
                <td className="px-4 py-3 font-medium">Newcastle United</td>
                <td className="px-4 py-3 text-right">38</td>
                <td className="px-4 py-3 text-right">19</td>
                <td className="px-4 py-3 text-right">11</td>
                <td className="px-4 py-3 text-right">8</td>
                <td className="px-4 py-3 text-right">54</td>
                <td className="px-4 py-3 text-right">40</td>
                <td className="px-4 py-3 text-right">68</td>
              </tr>
              <tr className="border-b bg-background">
                <td className="px-4 py-3 font-medium">Tottenham Hotspur</td>
                <td className="px-4 py-3 text-right">38</td>
                <td className="px-4 py-3 text-right">18</td>
                <td className="px-4 py-3 text-right">10</td>
                <td className="px-4 py-3 text-right">10</td>
                <td className="px-4 py-3 text-right">67</td>
                <td className="px-4 py-3 text-right">49</td>
                <td className="px-4 py-3 text-right">64</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
