import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import api from "@/api/axios";
import { useAuthStore } from "@/stores/auth.store";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const FormSchema = z.object({
  email: z.string().email({
    message:
      "Por favor, introduzca una dirección de correo electrónico válida.",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener al menos 6 caracteres.",
  }),
});

function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login, setToken } = useAuthStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await api.post("/auth/login", data);

      login({
        email: res.data.email,
        id: res.data.id,
        name: res.data.name,
        role: res.data.role,
      });

      setToken(res.data.token);

      form.reset();

      toast({
        title: `Vienvenido ${res.data.name}`,
        duration: 1500,
      });

      navigate("/");
    } catch (error: any) {
      console.log(error);

      toast({
        variant: "destructive",
        title: "Error",
        description: error.response.data.message,
        duration: 1500,
      });
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Iniciar sesión
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="******"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Iniciar Sesión
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </>
  );
}
export default LoginForm;
