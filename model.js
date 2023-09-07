
const mongoose = require("mongoose")


var url = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/ "
mongoose.connect(url).then(() => { console.log("Connected to MongoDB"); }).catch((err) => { console.log(err); })


var schema = new mongoose.Schema({
    img:String,
    title:String,
    about:String,
    ssc:String,
    article:String,
    cate:String
})

var db = mongoose.model("posts",schema);




var article = new db({
    img:"worldaf.jpg",
    title:"Global Challenges and Collaborative Solutions",
    about:"The interconnected nature of our world demands a coordinated approach to addressing global challenges and shaping international affairs.",
    ssc:"worldafssc.jpg",
    article:`Climate change stands as one of the most pressing global challenges of our time. Rising temperatures, extreme weather events, and biodiversity loss threaten ecosystems, livelihoods, and human well-being. The need for international cooperation, knowledge sharing, and the implementation of sustainable practices is critical. Global agreements like the Paris Agreement serve as frameworks for collective action, emphasizing the importance of reducing greenhouse gas emissions, transitioning to clean energy sources, and promoting climate resilience.





    Economic inequality persists as a significant concern worldwide, with implications for social stability, human rights, and inclusive development. Bridging the wealth gap and promoting sustainable economic growth requires international cooperation in areas such as fair trade, investment in education and healthcare, and the reduction of poverty. Collaborative efforts, including the United Nations' Sustainable Development Goals, aim to address these challenges by fostering partnerships and mobilizing resources to improve livelihoods and ensure a more equitable distribution of wealth.


    Global security threats, including terrorism, regional conflicts, and the proliferation of weapons of mass destruction, demand collective responses. International cooperation through organizations like the United Nations, regional alliances, and peacekeeping missions can help prevent and resolve conflicts, promote disarmament, and strengthen global security. Collaboration on intelligence sharing, counterterrorism efforts, and non-proliferation initiatives is crucial in mitigating the risks and ensuring a peaceful and stable world.



    `,
    cate:"World Affairs"
})

// article.save().then(()=>{
//     console.log("Docement is saved");
// }).catch((e)=>{console.log(e);})


// db.find().then((fitems)=>{
//     console.log(fitems);
// })
// db.deleteOne({title:"A.I"}).then(()=>{
//     console.log("Deleted");
// })


module.exports = {
    db : db,
    arti : article,

}