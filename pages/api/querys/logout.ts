import iron from "../../../config/session";

export default iron(async (req: any, res: any) => {
    req.session.destroy();
    res.redirect('/')
})