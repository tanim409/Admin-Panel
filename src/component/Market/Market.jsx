import MarketCard from "./MarketCard";
import MarketSearch from "./MarketSearch";
import MarketAnalysis from "./MarketAnalysis";
import MarketTable from "./MarketTable";
export default function Market() {
  return (
    <>
      <div>
        <MarketCard />
        <MarketSearch />
        <MarketAnalysis />
        <MarketTable />
      </div>
    </>
  );
}
