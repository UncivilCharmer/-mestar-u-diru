import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageWithFallback } from '@/lib/ImageWithFallback';
import { Wrench, Home, Zap, PaintBucket, Hammer, Droplets } from 'lucide-react';

const services = [
  {
    title: "General Repairs",
    description: "From fixing squeaky doors to patching drywall, we handle all your general home repair needs.",
    image: "https://images.unsplash.com/photo-1710002580483-d85075840fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVwYWlyJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NTcyNTUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Wrench,
    features: ["Drywall repair", "Door adjustments", "Window repairs", "Cabinet fixes"]
  },
  {
    title: "Plumbing Services",
    description: "Expert plumbing repairs and installations for faucets, toilets, and minor pipe work.",
    image: "https://images.unsplash.com/photo-1723988429049-0a42e45e8501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHRvb2xzJTIwcmVwYWlyfGVufDF8fHx8MTc1NzI1NTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Droplets,
    features: ["Faucet repair", "Toilet installation", "Leak fixes", "Pipe maintenance"]
  },
  {
    title: "Electrical Work",
    description: "Safe and reliable electrical repairs, outlet installation, and lighting solutions.",
    image: "https://images.unsplash.com/photo-1647314853926-9def39bb32c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd29yayUyMGhvbWV8ZW58MXx8fHwxNzU3MjU1MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Zap,
    features: ["Outlet installation", "Light fixtures", "Switch repairs", "Safety inspections"]
  },
  {
    title: "Painting & Finishing",
    description: "Interior and exterior painting services to refresh and protect your home.",
    image: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMGhvbWUlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc1NzI1NTEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: PaintBucket,
    features: ["Interior painting", "Exterior painting", "Touch-ups", "Color consultation"]
  },
  {
    title: "Carpentry Work",
    description: "Custom carpentry solutions for shelving, trim work, and wooden fixtures.",
    image: "https://images.unsplash.com/photo-1725916631418-7c000895345f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50cnklMjB3b29kd29yayUyMHRvb2xzfGVufDF8fHx8MTc1NzI1NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Hammer,
    features: ["Custom shelving", "Trim installation", "Furniture repair", "Deck maintenance"]
  },
  {
    title: "Home Maintenance",
    description: "Regular maintenance services to keep your home in excellent condition year-round.",
    image: "https://images.unsplash.com/photo-1710002580483-d85075840fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVwYWlyJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NTcyNTUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Home,
    features: ["Seasonal checkups", "Preventive care", "Gutter cleaning", "Weatherproofing"]
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional handyman services to keep your home in perfect condition. No job too big or small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 p-2 rounded-full">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}