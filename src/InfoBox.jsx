import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

function InfoBox({info}) {

  const imageURl =
    "data:image/jpeg;base64,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";
  return (
    <div className="InfoBox">
      <h1>Weather Information</h1>
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={imageURl} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Feels like = {info.feelslike}&deg;C</p>
            <p>Tempreture = {info.temp}&deg;F</p>
            <p>Min Tempreture = {info.tempMin}&deg;F</p>
            <p>Max Tempreture = {info.tempMax}&deg;F</p>
            <p>Humidity = {info.humidity}</p>
            <p>Weather description in more clear = {info.weather}</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
      </div>
  );
}

export default InfoBox;
