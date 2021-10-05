interface Usuario{
    login:string;
    name:string;
    blog:string | null;
    location: string | null;
    email: null | string;
    hireable: boolean | null;
    bio: string | null;
    public_repos:number;
    public_gists:number;
    followers:number;
    following:number;
}


export async function getDetallesParaUsuario(username:string)
:Promise<Usuario> {
    const res=await fetch(`https://github.com/users/${username}`);
    const usuario: Usuario = await res.json();
    return usuario;
}