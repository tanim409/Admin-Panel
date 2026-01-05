import "./MarketAnalysis.css";
import { MapPin, ChartPie, DollarSign } from "lucide-react";
import {
  MarketData,
  CategoryData,
  customerDemographics,
  VendorData,
} from "./MarketData";
import MarketLineChartInfo from "./MarketLineChartInfo";
import { Users, ChartColumnStacked, Award, Gem, ChartLine } from "lucide-react";
import CommisionLineChartInfo from "./CommisionLineChartInfo";
export default function MarketAnalysis() {
  return (
    <>
      <div className="analysis-container1">
        <div className="region-sales">
          <div className="region-sales-header">
            <MapPin className="region-icon" />
            <p>Sales By Region</p>
          </div>

          <div className="region-sales-content">
            {MarketData.map((marketData, index) => (
              <div key={index} className="region-sales-data">
                <div className="region-name">
                  <p> {marketData.region}</p>
                </div>
                <div className="sales-customers">
                  ${marketData.sales} . {marketData.customers} Customers
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${marketData.percentage}%` }}
                  ></div>
                </div>
                <div className="percentage-text">
                  <p>{marketData.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="category-sales">
          <div className="category-sales-header">
            <ChartPie className="category-icon" />
            <p>Sales By Category</p>
          </div>
          <div className="category-sales-content">
            <div className="category-sales-wrapper">
              {CategoryData.map((categoryData, index) => (
                <div key={index} className="category-sales-data">
                  <div
                    className="empty-box"
                    style={{
                      background:
                        index === 0
                          ? "#3b82f6"
                          : index === 1
                          ? "#8b5cf6"
                          : "#f97316",
                    }}
                  ></div>
                  <div className="category-info-wrapper">
                    <div className="category-info">
                      <div> {categoryData.category} </div>
                      <div className="percentage">
                        {categoryData.percentage}% of total
                      </div>
                    </div>
                  </div>

                  <div className="category-sales-amount">
                    <DollarSign className="dollar-sign" />
                    <div className="sale">{categoryData.sales} </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="chartContainer">
        <div className="lineChart">
          <p>📈 Monthly Sales Trend</p>
          <MarketLineChartInfo />
        </div>

        <div className="ageDemographics">
          <div className="ageDemographics-card">
            <Users className="userIcon" />
            <div>Customer Demographics by Age</div>
          </div>
          <div className="ageDemographics-data">
            {customerDemographics.map((data, index) => (
              <div key={index} className="ageDemographics-info">
                <div>
                  <div className="age-group">{data.ageGroup} years</div>
                </div>
                <div className="age-stats">
                  <div className="age-percentage">{data.percentage}%</div>
                  <div className="age-count">{data.count} customers</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="VendorChartContainer">
        <div className="salesByVendor">
          <div className="salesByVendor-header">
            Top 10 Vendors By Sales
            <div className="vendor-text"> Total sales</div>
          </div>

          <div className="vendor-sales-content">
            <div className="VendorSalesWrapper">
              {VendorData.map((vendorData, index) => (
                <div key={index} className="vendor-sales-data">
                  <div className="vendor-name">
                    <div className="index-category">
                      <div className="VendorIndex">#{index + 1}</div>
                      <p className="eco-products"> {vendorData.vendorName}</p>
                    </div>
                    <div className="sale-text">{vendorData.totalSales}</div>
                  </div>
                  <div className="VendorProgress-bar">
                    <div
                      className="VendorProgress-fill"
                      style={{ width: `${vendorData.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="categorySalesTrend">
          <div className="salesByVendor-header">
            Category Performence
            <div className="vendor-text"> Revenue By Category</div>
          </div>
          <div className="vendor-sales-content">
            {CategoryData.map((categoryData, index) => (
              <div key={index} className="vendor-sales-data">
                <div className="CategorySales-name">
                  <div className="index-category">
                    <div>
                      <p className="eco-product"> {categoryData.category}</p>
                      <div className="grid-container">
                        <div>{categoryData.product} products </div>
                        <div className="product-sold">
                          {categoryData.productSold} sold
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="revenueText">${categoryData.revenue}</div>
                </div>

                <div className="CategoryProgress-bar">
                  <div
                    className="CategoryProgress-fill"
                    style={{ width: `${categoryData.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="commisionTrend">
        <p>📈 Commission Trends </p>
        <CommisionLineChartInfo />
      </div>
      <div className="commission-container">
        <div className="commission-data">
          <div className="commission-header">
            <div>Quick Stats</div>
            <div>Market Overview</div>
          </div>
          <div className="data-container">
            <div className="chart-category">
              <div className="ChartColumnIcon">
                <ChartColumnStacked />
              </div>
              <div className="TotalCategories">
                <div>Total Categories</div>
                <div>8</div>
              </div>
            </div>
            
            {/* second */}

            <div className="chart-category">
              <div className="ChartLineIcon">
                <ChartLine />
              </div>
              <div className="TotalCategories">
                <div>Avg Commission/Day</div>
                <div>$79</div>
              </div>
            </div>   
            {/* third */}
            <div className="chart-category">
              <div className="ChartAwardIcon">
                <Award />
              </div>
              <div className="TotalCategories">
                <div>Top Categories</div>
                <div>sports</div>
              </div>
            </div>
          {/* fourth */}
            <div className="chart-category">
              <div className="ChartGemIcon">
                <Gem />
              </div>
              <div className="TotalCategories">
                <div>Top Vendor</div>
                <div>Plant Place</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
