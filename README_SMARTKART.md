# SmartKart - Modern E-commerce Frontend

A complete, modern, responsive e-commerce frontend built with React, Vite, and Tailwind CSS.

## 🚀 Features

### Pages & Components
- **Home Page** - Hero section, featured products, and key features
- **Product Listing** - Grid view with search, filter, and sorting
- **Authentication** - Login and register pages with form validation
- **Shopping Cart** - Add to cart functionality with context management
- **Responsive Layout** - Mobile-first design with navigation and footer

### Design System
- Professional blue primary color scheme
- Clean, modern typography and spacing
- Hover animations and smooth transitions
- Custom component variants (buttons, cards, inputs)
- Consistent design tokens and semantic colors

### State Management
- **AuthContext** - User authentication and profile management
- **CartContext** - Shopping cart state and operations
- React Query for API state management

### API Integration
- Axios setup with interceptors for authentication
- Centralized API configuration
- Error handling and loading states
- JWT token management in localStorage

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp .env.example .env
   # Update VITE_API_BASE_URL in .env file
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env` file with:
```env
VITE_API_BASE_URL=http://localhost:8000/api
```

### API Endpoints Expected
The frontend expects these backend endpoints:

#### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `GET /auth/profile` - Get user profile
- `POST /auth/logout` - User logout

#### Products
- `GET /products` - List all products (with search/filter params)
- `GET /products/featured` - Get featured products
- `GET /products/:id` - Get single product
- `GET /categories` - Get product categories

#### Cart
- `GET /cart` - Get user's cart
- `POST /cart/add` - Add item to cart
- `PUT /cart/update` - Update cart item quantity
- `DELETE /cart/remove/:productId` - Remove item from cart
- `DELETE /cart/clear` - Clear entire cart

#### Orders
- `POST /orders` - Create new order
- `GET /orders` - Get user's orders
- `GET /orders/:id` - Get single order

## 🎨 Design System

### Colors
- **Primary**: Professional blue (#0066FF)
- **Success**: Green for positive actions
- **Error**: Red for errors and warnings
- **Muted**: Subtle grays for secondary content

### Components
- **Buttons**: Primary, secondary, and cart variants
- **Cards**: Product cards with hover effects
- **Forms**: Styled inputs with icons and validation
- **Navigation**: Responsive navbar with cart counter

### Layout
- **Container**: Responsive max-width containers
- **Grid**: CSS Grid for product layouts
- **Spacing**: Consistent padding and margins
- **Typography**: Clear hierarchy with proper contrast

## 🔒 Authentication Flow

1. User registers/logs in via forms
2. JWT token stored in localStorage
3. Token included in API requests via Axios interceptors
4. Auto-logout on token expiration (401 responses)
5. Protected routes redirect to login when needed

## 🛒 Cart Management

- Context-based state management
- Persistent cart via backend API
- Real-time cart counter in navigation
- Add/remove/update quantity operations
- Cart cleared on successful order

## 📱 Responsive Design

- **Mobile**: Optimized for touch interfaces
- **Tablet**: Balanced layouts for mid-size screens
- **Desktop**: Full-featured experience
- **Breakpoints**: sm, md, lg, xl for consistent scaling

## 🚀 Production Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Preview production build:**
   ```bash
   npm run preview
   ```

3. **Deploy** the `dist` folder to your hosting service

## 🔗 Backend Integration

This frontend is designed to work with a REST API backend. Key integration points:

- **Headers**: Automatic JWT token inclusion
- **Error Handling**: Consistent error responses expected
- **Loading States**: UI shows loading during API calls
- **Data Format**: JSON request/response format

## 📄 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── product/        # Product-related components
│   └── ui/             # Base UI components (shadcn)
├── context/            # React Context providers
├── lib/                # Utilities and API setup
├── pages/              # Page components
├── assets/             # Images and static files
└── hooks/              # Custom React hooks
```

## 🎯 Key Features Implemented

✅ **Home Page** with hero section and featured products  
✅ **Authentication** with login/register forms  
✅ **Product Listing** with search and filters  
✅ **Shopping Cart** context and management  
✅ **Responsive Navigation** with cart counter  
✅ **Professional Design** system with animations  
✅ **API Integration** setup with error handling  
✅ **TypeScript** throughout for type safety  

## 🔄 Next Steps

To complete the e-commerce experience, consider adding:

- Product detail pages
- Checkout process
- User profile/account pages
- Order history
- Admin dashboard
- Payment integration
- Wishlist functionality
- Product reviews and ratings

---

**SmartKart** - Built with ❤️ using modern web technologies