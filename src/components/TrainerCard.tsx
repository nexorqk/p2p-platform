export const TrainerCard = ({
  trainer,
}: {
  trainer: { name: string; sport: string; specifics: string[] };
}) => {
  return (
    <div>Card</div>
    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //       {trainer.name}
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //       {trainer.sport}
    //     </Typography>
    //     {trainer.specifics.map((specific) => (
    //       <Typography key={specific} variant="body2">
    //         {specific}
    //       </Typography>
    //     ))}
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
};
