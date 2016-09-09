<?php
/**
 * @author Erol Soyöz <erol@soyoz.com>
 */

namespace Soyoz\BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AdminController extends Controller
{
    public function indexAction()
    {
        return $this->render('SoyozBlogBundle:Admin:index.html.twig', array());
    }

}
