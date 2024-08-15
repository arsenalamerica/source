// import { FixtureCard, FixtureCardProps } from '@arsenalamerica/components';

// const fixtureData: FixtureCardProps = {};

export default function FixturesPage() {
  return (
    <>
      <h1>Fixtures</h1>
      {/* <FixtureCard {...fixtureData} /> */}
      <div className="box">
        <div className="columns">
          <div className="column">
            <div className="is-flex is-flex-direction-column is-justify-content-center">
              <div>Logo</div>
              <div>Name</div>
            </div>
          </div>
          <div className="column is-centered">Test</div>
          <div className="column">
            <div className="is-flex is-flex-direction-column">
              <div>Logo</div>
              <div>Name</div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">Competition</div>
          <div className="column is-pulled-right">Location</div>
        </div>
      </div>
    </>
  );
}
